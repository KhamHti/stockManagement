const db = require("../../config/db");

module.exports = {
  createInventory: (data, callBack) => {
    db.query(
      `INSERT INTO INVENTORY (inventory_id, part_id, initial_qty, initial_price, current_qty, current_price, invoice_id) VALUES (?,?,?,?,?,?,?)`,
      [
        data.inventory_id,
        data.part_id,
        data.initial_qty,
        data.initial_price,
        data.current_qty,
        data.current_price,
        data.invoice_id,
      ],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  getAllInventory: (callBack) => {
    db.query(`SELECT * FROM INVENTORY`, [], (err, results) => {
      if (err) callBack(err);
      callBack(null, results);
    });
  },
  getInventoryById: (inventory_id, callBack) => {
    db.query(
      `SELECT * FROM INVENTORY WHERE inventory_id = ?`,
      [inventory_id],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  updateInventory: (data, callBack) => {
    db.query(
      `UPDATE INVENTORY SET part_id=?, initial_qty=?, initial_price=?, current_qty=?, current_price=?, invoice_id=? WHERE inventory_id=?`,
      [
        data.part_id,
        data.initial_qty,
        data.initial_price,
        data.current_qty,
        data.current_price,
        data.invoice_id,
        data.inventory_id,
      ],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  deleteInventory: (inventory_id, callBack) => {
    db.query(
      `DELETE FROM INVENTORY WHERE inventory_id=?`,
      [inventory_id],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
};
