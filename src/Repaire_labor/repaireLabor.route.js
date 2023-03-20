const router = require("express").Router();

const {
  createRepaireLabor,
  getRepaireLaborById,
  getRepaireLabors,
  updateRepaireLabor,
  deleteRepaireLabor,
} = require("./repaireLabor.controller");

router.post("/", createRepaireLabor);

router.get("/", getRepaireLabors);

router.get("/:id", getRepaireLaborById);

router.patch("/", updateRepaireLabor);

router.delete("/:id", deleteRepaireLabor);

module.exports = router;
