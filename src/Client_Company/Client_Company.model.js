const db = require("../../config/db");

module.exports = {
  createCLientComId: (data, callBack) => {
    db.query(
      `INSERT INTO Client_Company (client_company_id, client_id, company_id) VALUES (?,?,?)`,
      [data.client_company_id, data.client_id, data.company_id],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  getAllClientCom: (callBack) => {
    db.query(`SELECT * FROM Client_Company`, [], (err, results) => {
      if (err) callBack(err);
      callBack(null, results);
    });
  },
  getByClientComId: (client_company_id, callBack) => {
    db.query(
      `SELECT * FROM Client_Company WHERE client_company_id = ?`,
      [client_company_id],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  updateClientCom: (data, callBack) => {
    db.query(
      `UPDATE Client_Company SET client_id=?, company_id=? WHERE client_company_id = ?`,
      [data.client_id, data.company_id, data.client_company_id],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  deleteClientCom: (client_company_id, callBack) => {
    db.query(
      `DELETE FROM Client_Company WHERE client_company_id=?`,
      [client_company_id],
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
