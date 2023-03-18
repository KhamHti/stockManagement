const {
  createLaborId,
  getAllLabors,
  getLaborById,
  updateLabor,
  deleteLabor,
} = require("./labors.model");

module.exports = {
  createLaborId: (req, res) => {
    const data = req.body;
    createLaborId(data, (err, results) => {
      if (err) {
        res.json({
          message:
            err.message || "Some error occurred while creating labor id.",
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
  getAllLabors: (req, res) => {
    getAllLabors((err, results) => {
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
  getLaborById: (req, res) => {
    const labor_id = req.params.labor_id;
    getLaborById(labor_id, (err, results) => {
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
  updateLabor: (req, res) => {
    const data = req.body;
    updateLabor(data, (err, results) => {
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
        message: "Update labor successfully",
      });
    });
  },
  deleteLabor: (req, res) => {
    const labor_id = req.params.labor_id;
    deleteLabor(labor_id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      //   if (!results) {
      //     return res.json({
      //       success: 0,
      //       message: "Record not found",
      //     });
      //   }
      return res.json({
        success: 1,
        message: "Delete labor successfully",
      });
    });
  },
};
