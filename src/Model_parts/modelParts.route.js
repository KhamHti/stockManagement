const router = require("express").Router();

const {
  createModelPart,
  getAllModelParts,
  getModelPartById,
  updateModelPart,
  deleteModelPart,
} = require("./modelParts.controller");

router.get("/", getAllModelParts);

router.get("/:model_part_id", getModelPartById);

router.post("/", createModelPart);

router.patch("/", updateModelPart);

router.delete("/:model_part_id", deleteModelPart);

module.exports = router;
