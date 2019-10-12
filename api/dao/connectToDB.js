const mysql = require('mysql');

var connection = mysql.createPool({
    connectionLimit: 2,
    database: "tstt",
    host: "localhost",
    user: "root",
    password: "nghialuffy",
});

module.exports.getInstance = function(callback) {
    console.log("Ket noi database");
    return connection.getConnection(function(err, tempCont) {
        if(err) {
            console.log(err);
        }
        else {
            console.log('Da ket noi database');
            callback(tempCont);
            tempCont.release();
        }
    })
}