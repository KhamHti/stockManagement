const router = require("express").Router();
const {
  createInventory,
  getAllInventory,
  getInventoryById,
  updateInventory,
  deleteInventory,
} = require("./inventory.controller");

router.post("/", createInventory);

router.get("/", getAllInventory);

router.get("/:inventory_id", getInventoryById);

router.patch("/", updateInventory);

router.delete("/:inventory_id", deleteInventory);

module.exports = router;
