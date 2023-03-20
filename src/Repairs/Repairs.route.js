const {
  createRepairs,
  get,
  getById,
  deleteById,
  updateById,
} = require("./Repairs.controller");

const router = require("express").Router();

router.post("/", createRepairs);

router.get("/", get);

router.get("/:repair_id", getById);

router.patch("/", updateById);

router.delete("/:repair_id", deleteById);

module.exports = router;
