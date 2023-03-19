const {
  createParts,
  getParts,
  getPartsById,
  updateParts,
  deleteParts,
} = require("./parts.model");

module.exports = {
  createParts: (req, res) => {
    const body = req.body;
    createParts(body, (err, results) => {
      if (err)
        res.json({
          essage: err.message || "Some error occurred while creating parts.",
        });
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getParts: (req, res) => {
    getParts((err, results) => {
      if (err) return;
      return res.json({ data: results });
    });
  },
  getPartsById: (req, res) => {
    const part_id = req.params.part_id;
    getPartsById(part_id, (err, results) => {
      if (err) return;
      if (!results[0]) {
        return res.json({
          message: "Record not found",
        });
      }
      return res.json({ data: results });
    });
  },
  updateParts: (req, res) => {
    const data = req.body;
    updateParts(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) res.json({ message: "Content must not be empty" });
      return res.json({
        success: 1,
        message: "Update parts Successfully",
        data: results,
      });
    });
  },
  deleteParts: (req, res) => {
    const part_id = req.params.part_id;
    deleteParts(part_id, (err, results) => {
      if (err) return res.json({ success: 0, message: "parts id not found" });
      //   console.log(results);
      if (!results) {
        return res.json({
          success: 0,
          message: "parts id not found",
        });
      }
      if (results) {
        return res.json({
          success: 1,
          message: "Delete parts  successfully.",
        });
      }
    });
  },
};
