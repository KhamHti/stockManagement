const {
  create,
  get,
  getById,
  updateById,
  deleteById,
} = require("./InvenOpe.model");

module.exports = {
  create: (req, res) => {
    const data = req.body;
    create(data, (err, results) => {
      if (err) {
        console.log(err);
        return res.json({
          success: 0,
        });
      }
      if (results) {
        return res.json({
          success: 1,
          message: "create inventory operations successfully",
          data: results,
        });
      }
    });
  },
  get: (req, res) => {
    get((err, results) => {
      if (err) return;
      if (!results[0]) {
        res.json({
          message: "Record not found",
        });
      }
      if (results)
        res.json({
          success: 1,
          data: results,
        });
    });
  },
  getById: (req, res) => {
    const id = req.params.id;
    getById(id, (err, results) => {
      if (err) return;
      if (!results[0]) res.json({ success: 0, message: "Record Not found" });
      if (results) res.json({ success: 1, data: results });
    });
  },
  updateById: (req, res) => {
    const data = req.body;
    updateById(data, (err, results) => {
      if (err) return;
      if (results) res.json({ success: 1, message: "Update successfully" });
    });
  },
  deleteById: (req, res) => {
    const id = req.params.id;
    deleteById(id, (err, results) => {
      if (err) return;
      if (results) res.json({ success: 1, message: "Delete successfully" });
    });
  },
};
