const db = require("../../config/db");

module.exports = {
  createRepairs: (data, callBack) => {
    db.query(
      `INSERT INTO Repairs (repair_id, client_id, user_id, model_id, battery_sn, accessories, security_code, initial_state, client_defects, service_defects, repaire_description, service_notes, total, discount, finished, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        data.repair_id,
        data.client_id,
        data.user_id,
        data.model_id,
        data.battery_sn,
        data.accessories,
        data.security_code,
        data.initial_state,
        data.client_defects,
        data.service_defects,
        data.repaire_description,
        data.service_notes,
        data.total,
        data.discount,
        data.finished,
        data.created_at,
        data.updated_at,
      ],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  get: (callBack) => {
    db.query(`SELECT * FROM Repairs`, [], (err, results) => {
      if (err) callBack(err);
      callBack(null, results);
    });
  },
  getById: (repair_id, callBack) => {
    db.query(
      `SELECT * FROM Repairs WHERE repair_id = ?`,
      [repair_id],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  updateById: (data, callBack) => {
    db.query(
      `UPDATE Repairs SET client_id=?, user_id=?, model_id=?, battery_sn=?, accessories=?, security_code=?, initial_state=?, 
      client_defects=?,
      service_defects=?, repaire_description=?, service_notes=?, total=?, discount=?, finished=?, created_at=?, updated_at=?
      WHERE repair_id = ?`,
      [
        data.client_id,
        data.user_id,
        data.model_id,
        data.battery_sn,
        data.accessories,
        data.security_code,
        data.initial_state,
        data.client_defects,
        data.service_defects,
        data.repaire_description,
        data.service_notes,
        data.total,
        data.discount,
        data.finished,
        data.created_at,
        data.updated_at,
        data.repair_id,
      ],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  deleteById: (repair_id, callBack) => {
    db.query(
      `DELETE FROM Repairs WHERE repair_id = ?`,
      [repair_id],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
};
