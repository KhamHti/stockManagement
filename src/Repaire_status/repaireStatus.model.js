const db = require("../../config/db");

module.exports = {
  createRepaireStatus: (data, callBack) => {
    db.query(
      `INSERT INTO Repaire_status (id, repair_id, status_id, created_at, updated_at, user_id) VALUES (?,?,?,?,?,?)`,
      [
        data.id,
        data.repair_id,
        data.status_id,
        data.created_at,
        data.updated_at,
        data.user_id,
      ],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  getRepaireStatus: (callBack) => {
    db.query(`SELECT * FROM Repaire_status`, [], (err, results) => {
      if (err) callBack(err);
      callBack(null, results);
    });
  },
  getById: (id, callBack) => {
    db.query(
      `SELECT * FROM Repaire_status WHERE id=?`,
      [id],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  updateRepaireStatus: (data, callBack) => {
    db.query(
      `UPDATE Repaire_status SET repair_id=?, status_id=?, created_at=?, updated_at=?, user_id=? WHERE id=?`,
      [
        data.repair_id,
        data.status_id,
        data.created_at,
        data.updated_at,
        data.user_id,
        data.id,
      ],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  deleteById: (id, callBack) => {
    db.query(`DELETE FROM Repaire_status WHERE id=?`, [id], (err, results) => {
      if (err) callBack(err);
      callBack(null, results);
    });
  },
};
