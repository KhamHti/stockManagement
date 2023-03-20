const db = require("../../config/db");

module.exports = {
  createStatus: (data, callBack) => {
    db.query(
      `INSERT INTO Status (status_id, status_name) VALUES (?,?)`,
      [data.status_id, data.status_name],
      (err, results) => {
        if (err) callBack(err);
        return callBack(null, results);
      }
    );
  },
  getStatus: (callBack) => {
    db.query(`SELECT * FROM Status`, [], (err, results) => {
      if (err) callBack(err);
      return callBack(null, results);
    });
  },
  getStatusById: (status_id, callBack) => {
    db.query(
      `SELECT * FROM Status WHERE status_id = ?`,
      [status_id],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  updateStaus: (data, callBack) => {
    db.query(
      `UPDATE Status SET status_name=? WHERE status_id=?`,
      [data.status_name, data.status_id],
      (err, results) => {
        if (err) callBack(err);
        return callBack(null, results);
      }
    );
  },
  deleteStatus: (status_id, callBack) => {
    db.query(
      `DELETE FROM Status WHERE status_id=?`,
      [status_id],
      (err, results) => {
        if (err) callBack(err);
        // console.log(results);
        return callBack(null, results);
      }
    );
  },
};
