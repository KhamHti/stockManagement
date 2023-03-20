const {
  createRepaireLabor,
  getRepaireLaborById,
  getRepaireLabors,
  updateRepaireLabor,
  deleteRepaireLabor,
} = require("./repaireLabor.model");
module.exports = {
  createRepaireLabor: (req, res) => {
    const data = req.body;
    createRepaireLabor(data, (err, results) => {
      if (err) {
        res.json({
          message:
            err.message || "Some error occurred while creating repaire labor.",
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
  getRepaireLabors: (req, res) => {
    getRepaireLabors((err, results) => {
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
  getRepaireLaborById: (req, res) => {
    const id = req.params.id;
    getRepaireLaborById(id, (err, results) => {
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
  updateRepaireLabor: (req, res) => {
    const data = req.body;
    updateRepaireLabor(data, (err, results) => {
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
        message: "Update repaire labor  successfully",
      });
    });
  },
  deleteRepaireLabor: (req, res) => {
    const id = req.params.id;
    deleteRepaireLabor(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record  not found",
        });
      }
      return res.json({
        success: 1,
        message: "Delete repaire labor successfully",
      });
    });
  },
};
