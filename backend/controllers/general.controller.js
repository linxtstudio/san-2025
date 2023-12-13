const welcome = async (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Welcome to SAN 2024 backend!'
    })
}

module.exports = {
    welcome,
}
