const db = require("../../config/db");

module.exports = {
  create: (data, callBack) => {
    db.query(
      `INSERT INTO Inventory_Operations (id,inventory_id,operation_id,explanation,price,qty,repair_id,client_id,user_id) VALUES (?,?,?,?,?,?,?,?,?)`,
      [
        data.id,
        data.inventory_id,
        data.operation_id,
        data.explanation,
        data.price,
        data.qty,
        data.repair_id,
        data.client_id,
        data.user_id,
      ],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  get: (callBack) => {
    db.query(`SELECT * FROM Inventory_Operations`, [], (err, results) => {
      if (err) callBack(err);
      callBack(null, results);
    });
  },
  getById: (id, callBack) => {
    db.query(
      `SELECT * FROM Inventory_Operations WHERE id = ?`,
      [id],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  updateById: (data, callBack) => {
    db.query(
      `UPDATE Inventory_Operations SET inventory_id=?, operation_id=?, explanation=?, price=?, qty=?, repair_id=?, client_id=?, user_id=? WHERE id = ?`,
      [
        data.inventory_id,
        data.operation_id,
        data.explanation,
        data.price,
        data.qty,
        data.repair_id,
        data.client_id,
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
    db.query(
      `DELETE FROM INVENTORY_OPERATIONS WHERE id = ?`,
      [id],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
};
