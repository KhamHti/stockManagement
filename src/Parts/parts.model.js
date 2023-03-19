const db = require("../../config/db");

module.exports = {
  createParts: (data, callBack) => {
    db.query(
      `INSERT INTO Parts (part_id, part_name) VALUES (?,?)`,
      [data.part_id, data.part_name],
      (err, results) => {
        if (err) callBack(err);
        return callBack(null, results);
      }
    );
  },
  getParts: (callBack) => {
    db.query(`SELECT * FROM Parts`, [], (err, results) => {
      if (err) callBack(err);
      return callBack(null, results);
    });
  },
  getPartsById: (part_id, callBack) => {
    db.query(
      `SELECT * FROM Parts WHERE part_id = ?`,
      [part_id],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  updateParts: (data, callBack) => {
    db.query(
      `UPDATE Parts SET part_name=? WHERE part_id=?`,
      [data.part_name, data.part_id],
      (err, results) => {
        if (err) callBack(err);
        return callBack(null, results);
      }
    );
  },
  deleteParts: (part_id, callBack) => {
    db.query(`DELETE FROM Parts WHERE part_id=?`, [part_id], (err, results) => {
      if (err) callBack(err);
      // console.log(results);
      return callBack(null, results);
    });
  },
};
