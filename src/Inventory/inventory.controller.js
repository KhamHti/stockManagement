const {
  createInventory,
  getAllInventory,
  getInventoryById,
  updateInventory,
  deleteInventory,
} = require("./inventory.model");

module.exports = {
  createInventory: (req, res) => {
    const data = req.body;
    createInventory(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "create inventory successfully",
        data: results,
      });
    });
  },
  getAllInventory: (req, res) => {
    getAllInventory((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      res.json({
        success: 1,
        data: results,
      });
    });
  },
  getInventoryById: (req, res) => {
    const inventory_id = req.params.inventory_id;
    getInventoryById(inventory_id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results[0]) {
        res.json({
          success: 0,
          message: "Record not found",
        });
      }
      res.json({
        success: 1,
        data: results,
      });
    });
  },
  updateInventory: (req, res) => {
    const data = req.body;
    updateInventory(data, (err, results) => {
      if (err) return;
      res.json({
        success: 1,
        message: "update inventory successfully",
      });
    });
  },
  deleteInventory: (req, res) => {
    const inventory_id = req.params.inventory_id;
    deleteInventory(inventory_id, (err, results) => {
      if (err) return;
      res.json({
        success: 1,
        message: "delete inventory successfully",
      });
    });
  },
};
