const {
  createStatus,
  getStatus,
  getStatusById,
  updateStaus,
  deleteStatus,
} = require("./Status.model");

module.exports = {
  createStatus: (req, res) => {
    const body = req.body;
    createStatus(body, (err, results) => {
      if (err)
        res.json({
          essage: err.message || "Some error occurred while creating status.",
        });
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getStatus: (req, res) => {
    getStatus((err, results) => {
      if (err) return;
      return res.json({ data: results });
    });
  },
  getStatusById: (req, res) => {
    const status_id = req.params.status_id;
    getStatusById(status_id, (err, results) => {
      if (err) return;
      if (!results[0]) {
        return res.json({
          message: "Record not found",
        });
      }
      return res.json({ data: results });
    });
  },
  updateStaus: (req, res) => {
    const data = req.body;
    updateStaus(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) res.json({ message: "Content must not be empty" });
      return res.json({
        success: 1,
        message: "Update status Successfully",
        data: results,
      });
    });
  },
  deleteStatus: (req, res) => {
    const status_id = req.params.status_id;
    deleteStatus(status_id, (err, results) => {
      if (err) return res.json({ success: 0, message: "status_id not found" });
      //   console.log(results);
      if (!results) {
        return res.json({
          success: 0,
          message: "status_id not found",
        });
      }
      if (results) {
        return res.json({
          success: 1,
          message: "Delete status successfully.",
        });
      }
    });
  },
};
