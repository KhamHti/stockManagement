const router = require("express").Router();
const {
  createClient,
  getClientById,
  getClients,
  updateClientById,
  deleteClientById,
} = require("./clients.controller");

router.get("/", getClients);

router.get("/:client_id", getClientById);

router.post("/", createClient);

router.patch("/", updateClientById);

router.delete("/:client_id", deleteClientById);

module.exports = router;
