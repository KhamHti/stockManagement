const router = require("express").Router();
const {
  createInvoice,
  updateInvoice,
  getAllInvoices,
  getInvoiceById,
  deleteInvoice,
} = require("./invoices.controller");

router.get("/", getAllInvoices);

router.get("/:invoice_id", getInvoiceById);

router.post("/", createInvoice);

router.patch("/", updateInvoice);

router.delete("/:invoice_id", deleteInvoice);

module.exports = router;
