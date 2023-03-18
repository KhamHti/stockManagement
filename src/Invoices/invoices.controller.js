const {
  createInvoice,
  getAllInvoices,
  getInvoiceById,
  updateInvoice,
  deleteInvoice,
} = require("./invoices.model");

module.exports = {
  createInvoice: (req, res) => {
    const body = req.body;
    createInvoice(body, (err, results) => {
      if (err)
        res.json({
          essage: err.message || "Some error occurred while creating invoice.",
        });
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getAllInvoices: (req, res) => {
    getAllInvoices((err, results) => {
      if (err) return;
      if (!results[0]) res.json({ message: "Record not found" });
      return res.json({ data: results });
    });
  },
  getInvoiceById: (req, res) => {
    const invoice_id = req.params.invoice_id;
    getInvoiceById(invoice_id, (err, results) => {
      if (err) return;
      if (!results[0]) {
        return res.json({
          message: "Record not found",
        });
      }
      return res.json({ success: 1, data: results });
    });
  },
  updateInvoice: (req, res) => {
    const data = req.body;
    updateInvoice(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) res.json({ message: "Content must not be empty" });
      return res.json({
        success: 1,
        message: "Update invoice Successfully",
        data: results,
      });
    });
  },
  deleteInvoice: (req, res) => {
    const invoice_id = req.params.invoice_id;
    deleteInvoice(invoice_id, (err, results) => {
      if (err) return res.json({ success: 0, message: "Invoice id not found" });
      //   console.log(results);
      if (!results) {
        return res.json({
          success: 0,
          message: "Invoice id not found",
        });
      }
      if (results) {
        return res.json({
          success: 1,
          message: "Delete invoice  successfully.",
        });
      }
    });
  },
};
