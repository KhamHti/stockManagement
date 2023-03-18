const db = require("../../config/db");

module.exports = {
  create: (data, callBack) => {
    db.query(
      `INSERT INTO Companies (company_id, company_name) VALUES (?,?)`,
      [data.company_id, data.company_name],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  getAll: (callBack) => {
    db.query(`SELECT * FROM Companies`, [], (err, results) => {
      if (err) callBack(err);
      callBack(null, results);
    });
  },
  getOne: (company_id, callBack) => {
    db.query(
      `SELECT * FROM Companies WHERE company_id = ?`,
      [company_id],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  updateCompany: (data, callBack) => {
    db.query(
      `UPDATE Companies SET company_name=? WHERE company_id = ?`,
      [data.company_name, data.company_id],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  deleteCompany: (company_id, callBack) => {
    db.query(
      `DELETE FROM Companies WHERE company_id=?`,
      [company_id],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
};
