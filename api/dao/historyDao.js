const db = require('./connectToDB');

module.exports.createEvent = function (event) {
    return new Promise(function (resolve, reject) {
        db.getInstance(function (connection) {
            let stmt = `INSERT INTO history(id, user_id, answer, created) VALUES(?,?,?,?)`;
            let todo = [event.id, event.user_id, event.answer, event.created];

            connection.query(stmt, todo, function (err, result) {
                if (err) return reject(err);
                // connection.close();
                console.log("Insert event to history successful");
                return resolve(result);
            })
        })
    })
}
module.exports.loadHistory = function (user_id) {
    return new Promise((resolve, reject) => {
        db.getInstance((connection) => {
            let stmt = "SELECT * FROM history WHERE user_id ="+ user_id+";";
            console.log(stmt);
            connection.query(stmt, (err, result) => {
                if (err) return reject(err);
                console.log("Get history successfully!");
                return resolve(result);
            })
        })
    })
}