const {
  createModel,
  getAllModels,
  getModelById,
  deleteModel,
  updateModel,
} = require("./models.model");

module.exports = {
  createModel: (req, res) => {
    const data = req.body;
    createModel(data, (err, results) => {
      if (err) {
        res.json({
          message:
            err.message || "Some error occurred while creating model  id.",
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
  getAllModels: (req, res) => {
    getAllModels((err, results) => {
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
  getModelById: (req, res) => {
    const model_id = req.params.model_id;
    getModelById(model_id, (err, results) => {
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
  updateModel: (req, res) => {
    const data = req.body;
    updateModel(data, (err, results) => {
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
        message: "Update model  successfully",
      });
    });
  },
  deleteModel: (req, res) => {
    const model_id = req.params.model_id;
    deleteModel(model_id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "model_id  not found",
        });
      }
      return res.json({
        success: 1,
        message: "Delete model_id successfully",
      });
    });
  },
};
