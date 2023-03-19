const {
  createModelPart,
  getAllModelParts,
  getModelPartById,
  updateModelPart,
  deleteModelPart,
} = require("./modelParts.model");

module.exports = {
  createModelPart: (req, res) => {
    const data = req.body;
    createModelPart(data, (err, results) => {
      if (err) {
        res.json({
          message:
            err.message || "Some error occurred while creating model part id.",
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
  getAllModelParts: (req, res) => {
    getAllModelParts((err, results) => {
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
  getModelPartById: (req, res) => {
    const model_part_id = req.params.model_part_id;
    getModelPartById(model_part_id, (err, results) => {
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
  updateModelPart: (req, res) => {
    const data = req.body;
    updateModelPart(data, (err, results) => {
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
        message: "Update model parts successfully",
      });
    });
  },
  deleteModelPart: (req, res) => {
    const model_part_id = req.params.model_part_id;
    deleteModelPart(model_part_id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "model_part_id  not found",
        });
      }
      return res.json({
        success: 1,
        message: "Delete client_company_id successfully",
      });
    });
  },
};
