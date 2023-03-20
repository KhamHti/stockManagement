const db = require("../../config/db");

module.exports = {
  createRepaireLabor: (data, callBack) => {
    db.query(
      `INSERT INTO Repaire_labor (id, labor_id, repair_id) VALUES (?,?,?)`,
      [data.id, data.labor_id, data.repair_id],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  getRepaireLabors: (callBack) => {
    db.query(`SELECT * FROM Repaire_labor`, [], (err, results) => {
      if (err) callBack(err);
      callBack(null, results);
    });
  },
  getRepaireLaborById: (id, callBack) => {
    db.query(
      `SELECT * FROM Repaire_labor WHERE id = ?`,
      [id],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  updateRepaireLabor: (data, callBack) => {
    db.query(
      `UPDATE Repaire_labor SET labor_id=?, repair_id=? WHERE id = ?`,
      [data.labor_id, data.repair_id, data.id],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  deleteRepaireLabor: (id, callBack) => {
    db.query(`DELETE FROM Repaire_labor WHERE id=?`, [id], (err, results) => {
      if (err) {
        console.log(err);
        return callBack(err);
      }
      return callBack(null, results);
    });
  },
};
