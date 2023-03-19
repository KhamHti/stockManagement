const router = require("express").Router();
const {
  createModel,
  getAllModels,
  getModelById,
  updateModel,
  deleteModel,
} = require("./models.controller");

router.get("/", getAllModels);

router.get("/:model_id", getModelById);

router.post("/", createModel);

router.patch("/", updateModel);

router.delete("/:model_id", deleteModel);

module.exports = router;
