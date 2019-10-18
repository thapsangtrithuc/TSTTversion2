const historyDao = require('../dao/historyDao');

module.exports.createEvent = function (req, res) {
    console.log(req.body);
    historyDao.createEvent(req.body).then(event => {
        res.status(200).json(event);
    }).catch((err) => {
        console.log(err);
        res.status(404).json({ 'message': 'Create event in history failed' });
    })
}

module.exports.loadHistory = function (req, res) {
    console.log(req.params.user_id);
    historyDao.loadHistory(req.params.user_id).then(history => {
        res.status(200).json(history);
    }).catch((err) => {
        console.log(err);
        res.status(404).json({'message': 'Load history failed!!'});
    })
}