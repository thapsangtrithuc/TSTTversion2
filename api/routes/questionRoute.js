const express = require('express')
const router = express.Router();
const questionController = require('../controller/questionController')

router.get('/:idThiSinh', questionController.getQuestion);

module.exports = router;