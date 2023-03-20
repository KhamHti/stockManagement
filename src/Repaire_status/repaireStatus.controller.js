const {
  createRepaireStatus,
  getById,
  getRepaireStatus,
  updateRepaireStatus,
  deleteById,
} = require("./repaireStatus.model");

module.exports = {
  createRepaireStatus: (req, res) => {
    const data = req.body;
    createRepaireStatus(data, (err, results) => {
      if (err) return;
      if (results)
        res.json({
          success: 1,
          data: results,
          message: "Create repaire status successfully",
        });
    });
  },
  getRepaireStatus: (req, res) => {
    getRepaireStatus((err, results) => {
      if (err) res.json({ message: err.message });
      res.json({ success: 1, data: results });
    });
  },
  getById: (req, res) => {
    const id = req.params.id;
    getById(id, (err, results) => {
      if (err) res.json({ message: err.message });
      if (!results[0]) res.json({ message: err.message || "record not found" });
      res.json({ success: 1, data: results });
    });
  },
  updateRepaireStatus: (req, res) => {
    const data = req.body;
    updateRepaireStatus(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "Update repaire status successfully",
      });
    });
  },
  deleteById: (req, res) => {
    const id = req.params.id;
    deleteById(id, (err, results) => {
      if (err) return res.json({ message: err.message });
      if (!results) res.json({ success: 0, message: "Record not found" });
      if (results)
        res.json({ success: 1, message: "Delete repaire status successfully" });
    });
  },
};
