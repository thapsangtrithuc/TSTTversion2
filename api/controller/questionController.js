const userDao = require('../dao/questionDao');

module.exports.getQuestion = function (req, res) {
    let idThiSinh =req.params.idThiSinh;
    userDao.getQuestion(idThiSinh).then(question => {
        res.json(question);
    }).catch((err) => {
        console.log(err);
        res.json({ 'message': 'Load question failed' });
    })
}
