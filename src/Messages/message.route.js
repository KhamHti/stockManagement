const router = require("express").Router();

const {
  createMessage,
  getAllMessage,
  getMessageById,
  updateMessage,
  deleteMessage,
} = require("./message.controller");

router.get("/", getAllMessage);

router.get("/:id", getMessageById);

router.post("/", createMessage);

router.patch("/", updateMessage);

router.delete("/:id", deleteMessage);

module.exports = router;
