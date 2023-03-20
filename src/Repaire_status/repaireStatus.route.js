const router = require("express").Router();

const {
  getById,
  getRepaireStatus,
  createRepaireStatus,
  updateRepaireStatus,
  deleteById,
} = require("./repaireStatus.controller");

router.get("/", getRepaireStatus);

router.get("/:id", getById);

router.post("/", createRepaireStatus);

router.patch("/", updateRepaireStatus);

router.delete("/:id", deleteById);

module.exports = router;
