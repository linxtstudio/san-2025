const multer = require('multer')
const fs = require('fs')
const path = require('path')

const { generateRandomString } = require('../utils/string.util')

const checkDirectory = (req, res, next) => {
    const dir = './public/uploads'
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    next()
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/')
    },
    filename: (req, file, cb) => {
        const module = req.query.module || 'transfer-receipt'
        cb(null, Date.now() + `_${module}_` + generateRandomString() + path.extname(file.originalname))
    },
})

const maxSize = 2 * 1024 * 1024 // 2MB
const upload = multer({
    storage,
    limits: { fileSize: maxSize },
})

module.exports = {
    checkDirectory,
    upload,
}
