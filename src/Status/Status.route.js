const {
  getStatus,
  getStatusById,
  createStatus,
  deleteStatus,
  updateStaus,
} = require("./Status.controller");

const router = require("express").Router();

router.get("/", getStatus);

router.get("/:status_id", getStatusById);

router.post("/", createStatus);

router.patch("/", updateStaus);

router.delete("/:status_id", deleteStatus);

module.exports = router;
