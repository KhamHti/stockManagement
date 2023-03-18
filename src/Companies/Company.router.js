const {
  createCompany,
  getAllCompany,
  getCompanyById,
  updateCompanyById,
  deleteCompanyById,
} = require("./Company.controller");
const router = require("express").Router();

router.get("/", getAllCompany);

router.get("/:company_id", getCompanyById);

router.post("/", createCompany);

router.patch("/", updateCompanyById);

router.delete("/:company_id", deleteCompanyById);

module.exports = router;
