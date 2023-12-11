const express = require('express');
const router = express.Router();

const generalController = require('../controllers/general.controller')

router.get('/', generalController.welcome);

module.exports = router;
