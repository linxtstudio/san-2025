const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authConfig = require('../config/auth.config')
const userRepo = require('../repositories/user.repository')

const login = async (req, res) => {
    const { username, password } = req.body

    const user = await userRepo.getUserByUsername({ username })
    if (!user) {
        return res.status(401).json({
            status: 401,
            message: 'Invalid username or password',
        })
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password)
    if (!isPasswordMatched) {
        return res.status(401).json({
            status: 401,
            message: 'Invalid username or password',
        })
    }

    const jwtToken = jwt.sign({ id: user.id }, authConfig.jwt_secret)

    res.status(200).json({
        status: 200,
        message: 'Success to login',
        data: {
            access_token: jwtToken,
            user: {
                id: user.id,
                name: user.name,
                username: user.username,
            }
        },
    })
}

module.exports = {
    login
}
