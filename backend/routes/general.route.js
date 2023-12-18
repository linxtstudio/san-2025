const express = require('express')
const router = express.Router()

const { checkDirectory, upload } = require('../middlewares/file.middleware')

const generalController = require('../controllers/general.controller')

router.get('/', generalController.welcome)
router.post('/files/upload', checkDirectory, upload.single('file'), generalController.upload)
router.get('/files/download/:name', generalController.download)

module.exports = router
