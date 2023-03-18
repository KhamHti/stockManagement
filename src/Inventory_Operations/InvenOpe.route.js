const router = require("express").Router();
const {
  create,
  get,
  getById,
  deleteById,
  updateById,
} = require("./InvenOpe.controller");

router.post("/", create);

router.get("/", get);

router.get("/:id", getById);

router.patch("/", updateById);

router.delete("/:id", deleteById);

module.exports = router;
