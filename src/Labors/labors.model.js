const db = require("../../config/db");

module.exports = {
  createLaborId: (data, callBack) => {
    db.query(
      `INSERT INTO Labors (labor_id, labor_name, price) VALUES (?,?,?)`,
      [data.labor_id, data.labor_name, data.price],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  getAllLabors: (callBack) => {
    db.query(`SELECT * FROM Labors`, [], (err, results) => {
      if (err) callBack(err);
      callBack(null, results);
    });
  },
  getLaborById: (labor_id, callBack) => {
    db.query(
      `SELECT * FROM Labors WHERE labor_id = ?`,
      [labor_id],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  updateLabor: (data, callBack) => {
    db.query(
      `UPDATE Labors SET labor_name=?, price=? WHERE labor_id = ?`,
      [data.labor_name, data.price, data.labor_id],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  deleteLabor: (labor_id, callBack) => {
    db.query(
      `DELETE FROM Labors WHERE labor_id=?`,
      [labor_id],
      (err, results) => {
        if (err) {
          console.log(err);
          return callBack(err);
        }
        return callBack(null, results);
      }
    );
  },
};
