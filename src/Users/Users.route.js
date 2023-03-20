const {
  createUser,
  getUserById,
  getUsers,
  updateUsers,
  deleteUser,
} = require("./Users.controller");

const router = require("express").Router();

router.get("/", getUsers);

router.get("/:user_id", getUserById);

router.post("/", createUser);

router.patch("/", updateUsers);

router.delete("/:user_id", deleteUser);

module.exports = router;
