const {
  create,
  getAll,
  getOne,
  updateCompany,
  deleteCompany,
} = require("./Company.model");

module.exports = {
  createCompany: (req, res) => {
    const data = req.body;
    create(data, (err, results) => {
      if (err) {
        res.json({
          message:
            err.message ||
            "Some error occurred while creating client company id.",
        });
      }
      if (!results)
        res.json({
          success: 0,
          message: "Content must not be empty",
        });
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getAllCompany: (req, res) => {
    getAll((err, results) => {
      if (err) return res.json({ message: err.message });
      res.json({ success: 1, data: results });
    });
  },
  getCompanyById: (req, res) => {
    const company_id = req.params.company_id;
    getOne(company_id, (err, results) => {
      if (err) res.json({ message: err.message });
      if (!results[0]) res.json({ message: err.message || "record not found" });
      res.json({ success: 1, data: results });
    });
  },
  updateCompanyById: (req, res) => {
    const data = req.body;
    updateCompany(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "Update company successfully",
      });
    });
  },
  deleteCompanyById: (req, res) => {
    const company_id = req.params.company_id;
    deleteCompany(company_id, (err, results) => {
      if (err) return res.json({ message: err.message });
      if (!results) res.json({ success: 0, message: "Record not found" });
      if (results)
        res.json({ success: 1, message: "Delete company successfully" });
    });
  },
};
