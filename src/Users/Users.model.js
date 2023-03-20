const db = require("../../config/db");

module.exports = {
  createUser: (data, callBack) => {
    db.query(
      `INSERT INTO Users (user_id, user_name, user_email, user_password) VALUES (?,?,?,?)`,
      [data.user_id, data.user_name, data.user_email, data.user_password],
      (err, results) => {
        if (err) callBack(err);
        return callBack(null, results);
      }
    );
  },
  getUsers: (callBack) => {
    db.query(`SELECT * FROM Users`, [], (err, results) => {
      if (err) callBack(err);
      return callBack(null, results);
    });
  },
  getUserById: (user_id, callBack) => {
    db.query(
      `SELECT * FROM Users WHERE user_id = ?`,
      [user_id],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  updateUsers: (data, callBack) => {
    db.query(
      `UPDATE Users SET user_name=?, user_email=?, user_password=? WHERE user_id=?`,
      [data.user_name, data.user_email, data.user_password, data.user_id],
      (err, results) => {
        if (err) callBack(err);
        return callBack(null, results);
      }
    );
  },
  deleteUser: (user_id, callBack) => {
    db.query(`DELETE FROM Users WHERE user_id=?`, [user_id], (err, results) => {
      if (err) callBack(err);
      // console.log(results);
      return callBack(null, results);
    });
  },
};
