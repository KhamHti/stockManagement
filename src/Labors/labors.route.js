const router = require("express").Router();

const {
  getLaborById,
  getAllLabors,
  createLaborId,
  updateLabor,
  deleteLabor,
} = require("./labors.controller");

router.get("/", getAllLabors);

router.get("/:labor_id", getLaborById);

router.post("/", createLaborId);

router.patch("/", updateLabor);

router.delete("/:labor_id", deleteLabor);

module.exports = router;
