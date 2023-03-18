const {
  createCLientComId,
  getAllClientCom,
  getByClientComId,
  updateClientCom,
  deleteClientCom,
} = require("./Client_Company.model");

module.exports = {
  createCLientComId: (req, res) => {
    const data = req.body;
    createCLientComId(data, (err, results) => {
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
  getAllClientCom: (req, res) => {
    getAllClientCom((err, results) => {
      if (err) {
        res.json({
          message: err.message,
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getByClientComId: (req, res) => {
    const client_company_id = req.params.client_company_id;
    getByClientComId(client_company_id, (err, results) => {
      if (err) {
        res.json({
          message: err.message,
        });
      }
      if (!results[0]) res.json({ message: "Record not found" });
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  updateClientCom: (req, res) => {
    const data = req.body;
    updateClientCom(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Content must not be empty",
        });
      }
      return res.json({
        success: 1,
        message: "Update location successfully",
      });
    });
  },
  deleteClientCom: (req, res) => {
    const client_company_id = req.params.client_company_id;
    deleteClientCom(client_company_id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "client_company_id  not found",
        });
      }
      return res.json({
        success: 1,
        message: "Delete client_company_id successfully",
      });
    });
  },
};
