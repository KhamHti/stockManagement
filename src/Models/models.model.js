const db = require("../../config/db");

module.exports = {
  createModel: (data, callBack) => {
    db.query(
      `INSERT INTO Models (model_id, brand_id, model_name, model_image_url) VALUES (?,?,?,?)`,
      [data.model_id, data.brand_id, data.model_name, data.model_image_url],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  getAllModels: (callBack) => {
    db.query(`SELECT * FROM Models`, [], (err, results) => {
      if (err) callBack(err);
      callBack(null, results);
    });
  },
  getModelById: (model_id, callBack) => {
    db.query(
      `SELECT * FROM Models WHERE model_id = ?`,
      [model_id],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  updateModel: (data, callBack) => {
    db.query(
      `UPDATE Models SET brand_id=?, model_name=?, model_image_url=? WHERE model_id = ?`,
      [data.brand_id, data.model_name, data.model_image_url, data.model_id],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  deleteModel: (model_id, callBack) => {
    db.query(
      `DELETE FROM Models WHERE model_id=?`,
      [model_id],
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
