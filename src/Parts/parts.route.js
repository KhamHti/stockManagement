const router = require("express").Router();

const {
  createParts,
  getParts,
  getPartsById,
  updateParts,
  deleteParts,
} = require("./parts.controller");

router.get("/", getParts);

router.get("/:part_id", getPartsById);

router.post("/", createParts);

router.patch("/", updateParts);

router.delete("/:part_id", deleteParts);

module.exports = router;
