const {
  createCLientComId,
  getAllClientCom,
  getByClientComId,
  updateClientCom,
  deleteClientCom,
} = require("./Client_Company.controller");
const router = require("express").Router();

router.post("/", createCLientComId);

router.get("/", getAllClientCom);

router.get("/:client_company_id", getByClientComId);

router.delete("/:client_company_id", deleteClientCom);

router.patch("/", updateClientCom);

module.exports = router;
