const express = require('express')
const router = express.Router();
const historyController = require('../controller/historyController')

router.post('/', historyController.createEvent);
router.get('/:user_id', historyController.loadHistory);
module.exports = router;