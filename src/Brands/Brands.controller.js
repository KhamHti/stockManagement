const res = require("express/lib/response");
const {
  createBrand,
  getAllBrands,
  getBrandByBrandId,
  updateBrand,
  deleteBrand,
} = require("./Brands.model");

module.exports = {
  createBrand: (req, res) => {
    const body = req.body;
    createBrand(body, (err, results) => {
      if (err)
        res.json({
          essage: err.message || "Some error occurred while creating brands.",
        });
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getAllBrands: (req, res) => {
    getAllBrands((err, results) => {
      if (err) return;
      return res.json({ data: results });
    });
  },
  getOne: (req, res) => {
    const brand_id = req.params.brand_id;
    getBrandByBrandId(brand_id, (err, results) => {
      if (err) return;
      if (!results[0]) {
        return res.json({
          message: "Record not found",
        });
      }
      return res.json({ data: results });
    });
  },
  updateBrand: (req, res) => {
    const data = req.body;
    updateBrand(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) res.json({ message: "Content must not be empty" });
      return res.json({
        success: 1,
        message: "Update Brands Successfully",
        data: results,
      });
    });
  },
  deleteBrand: (req, res) => {
    const brand_id = req.params.brand_id;
    deleteBrand(brand_id, (err, results) => {
      if (err) return res.json({ success: 0, message: "Brand id not found" });
      //   console.log(results);
      if (!results) {
        return res.json({
          success: 0,
          message: "Brand id not found",
        });
      }
      if (results) {
        return res.json({
          success: 1,
          message: "Delete brand  successfully.",
        });
      }
    });
  },
};
