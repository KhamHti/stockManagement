const db = require("../../config/db");

module.exports = {
  createMessage: (data, callBack) => {
    db.query(
      `INSERT INTO Messages (id, repair_id, type, template, delivered, created_at, updated_at) VALUES (?,?,?,?,?,?,?)`,
      [
        data.id,
        data.repair_id,
        data.type,
        data.template,
        data.delivered,
        data.created_at,
        data.updated_at,
      ],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  getAllMessage: (callBack) => {
    db.query(`SELECT * FROM Messages`, [], (err, results) => {
      if (err) callBack(err);
      callBack(null, results);
    });
  },
  getMessageById: (id, callBack) => {
    db.query(`SELECT * FROM Messages WHERE id = ?`, [id], (err, results) => {
      if (err) callBack(err);
      callBack(null, results);
    });
  },
  updateMessage: (data, callBack) => {
    db.query(
      `UPDATE Messages SET repair_id=?, type=?, template=?, delivered=?, created_at=?, updated_at=? WHERE id=?`,
      [
        data.repair_id,
        data.type,
        data.template,
        data.delivered,
        data.created_at,
        data.updated_at,
        data.id,
      ],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  deleteMessage: (id, callBack) => {
    db.query(`DELETE FROM Messages WHERE id=?`, [id], (err, results) => {
      if (err) callBack(err);
      callBack(null, results);
    });
  },
};
