const {
  createBrand,
  getAllBrands,
  getOne,
  updateBrand,
  deleteBrand,
} = require("./Brands.controller");

const router = require("express").Router();

router.get("/", getAllBrands);

router.get("/:brand_id", getOne);

router.post("/", createBrand);

router.patch("/", updateBrand);

router.delete("/:brand_id", deleteBrand);

module.exports = router;
