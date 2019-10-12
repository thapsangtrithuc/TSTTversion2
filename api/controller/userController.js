const userDao = require('../dao/userDao');

module.exports.login = function (req, res) {
    console.log(req.body);
    userDao.login(req.body.username, req.body.password).then(user => {
        res.status(200).json(user);
    }).catch((err) => {
        console.log(err);
        res.status(404).json({ 'message': 'login failed' });
    })
}


module.exports.getUser = async function (req, res) {
    console.log('getUser');
    let user = await userDao.getUser(req.params.id);
    res.json(user);
}
module.exports.getAllUsers = async function (req, res) {
    let users = await userDao.getAllUsers();
    res.json(users);
}
// TODO Hàm update điểm số của một thí sinh
module.exports.updatePoint = async function (req, res) {
    console.log('Update diem');
    userDao.updatePoint(req.params.id, req.params.point);
}