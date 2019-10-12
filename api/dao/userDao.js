const db = require('./connectToDB');

module.exports.getUser = function (id) {
    return new Promise(function (resolve, reject) {
        db.getInstance(function (connection) {
            let sql = "SELECT * FROM user WHERE id='" + id + "';";
            console.log(sql);
            connection.query(sql, function (err, result) {
                if (err) return reject(err);
                // connection.close();
                if (result.length > 0) return resolve(result[0]);
                reject('Khong tim thay');
            })
        })
    })
}

module.exports.login = function (username, password) {
    return new Promise(function (resolve, reject) {
        db.getInstance(function (connection) {
            let sql = "SELECT * FROM user WHERE username='" + username + "' AND password='" + password + "';";
            console.log(sql)
            connection.query(sql, function (err, result) {
                if (err) return reject(err);
                // connection.close();
                if (result.length > 0) return resolve(result[0]);
                reject('khon tim thay 2');
            })
        })
    })
}

module.exports.getAllUsers = function () {
    return new Promise((resolve, reject) => {
        db.getInstance((connection)=> {
            let sql = "SELECT * FROM user";
            connection.query(sql, function (err, result) {
                if (err) return reject(err);
                // connection.close();
                if (result.length > 0) return resolve(result);
                reject('Khong tim thay');
            })
            
        })
    })
}

// TODO cập nhật điểm của thí sinh
module.exports.updatePoint = function (id, newPoint) {
    return new Promise((resolve, reject) => {
        db.getInstance((connection) => {
            let sql = "UPDATE user SET point = '" + newPoint +
                "' WHERE (`id` = '" + id + "');"
        })
    })
}