// const db = require('./connectToDB');

// module.exports.getQuestion = function (idThiSinh) {
//     return new Promise(function (resolve, reject) {
//         db.getInstance(function (connection) {
//             let sql = "SELECT * FROM question WHERE thisinh='" + idThiSinh + "';";
//             console.log(sql);
//             connection.query(sql, function (err, result) {
//                 if (err) return reject(err);
//                 // connection.close();
//                 if (result.length != 0) {
//                     return resolve(result);
//                 };
//                 reject('Khong tim thay cau hoi');
//             })
//         })
//     })
// }

//Dung trong tuong lai