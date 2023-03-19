const db = require("../../config/db");

module.exports = {
  createModelPart: (data, callBack) => {
    db.query(
      `INSERT INTO Model_Parts (model_part_id, part_id, model_id) VALUES (?,?,?)`,
      [data.model_part_id, data.part_id, data.model_id],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  getAllModelParts: (callBack) => {
    db.query(`SELECT * FROM Model_Parts`, [], (err, results) => {
      if (err) callBack(err);
      callBack(null, results);
    });
  },
  getModelPartById: (model_part_id, callBack) => {
    db.query(
      `SELECT * FROM Model_Parts WHERE model_part_id = ?`,
      [model_part_id],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  updateModelPart: (data, callBack) => {
    db.query(
      `UPDATE Model_Parts SET part_id=?, model_id=? WHERE model_part_id = ?`,
      [data.part_id, data.model_id, data.model_part_id],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  deleteModelPart: (model_part_id, callBack) => {
    db.query(
      `DELETE FROM Model_Parts WHERE model_part_id=?`,
      [model_part_id],
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
