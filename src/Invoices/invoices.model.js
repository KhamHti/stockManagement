const db = require("../../config/db");

module.exports = {
  createInvoice: (data, callBack) => {
    db.query(
      `INSERT INTO Invoices (invoice_id, company_id, date, total_value) VALUES (?,?,?,?)`,
      [data.invoice_id, data.company_id, data.date, data.total_value],
      (err, results) => {
        if (err) callBack(err);
        return callBack(null, results);
      }
    );
  },
  getAllInvoices: (callBack) => {
    db.query(`SELECT * FROM Invoices`, [], (err, results) => {
      if (err) callBack(err);
      return callBack(null, results);
    });
  },
  getInvoiceById: (invoice_id, callBack) => {
    db.query(
      `SELECT * FROM Invoices WHERE invoice_id = ?`,
      [invoice_id],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  updateInvoice: (data, callBack) => {
    db.query(
      `UPDATE Invoices SET company_id=?, date=?, total_value=? WHERE invoice_id=?`,
      [data.company_id, data.date, data.total_value, data.invoice_id],
      (err, results) => {
        if (err) callBack(err);
        return callBack(null, results);
      }
    );
  },
  deleteInvoice: (invoice_id, callBack) => {
    db.query(
      `DELETE FROM Invoices WHERE invoice_id=?`,
      [invoice_id],
      (err, results) => {
        if (err) callBack(err);
        // console.log(results);
        return callBack(null, results);
      }
    );
  },
};
