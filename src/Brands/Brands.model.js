const db = require("../../config/db");

module.exports = {
  createBrand: (data, callBack) => {
    db.query(
      `INSERT INTO Brands (brand_id,brand_name) VALUES (?,?)`,
      [data.brand_id, data.brand_name],
      (err, results) => {
        if (err) callBack(err);
        return callBack(null, results);
      }
    );
  },
  getAllBrands: (callBack) => {
    db.query(`SELECT * FROM Brands`, [], (err, results) => {
      if (err) callBack(err);
      return callBack(null, results);
    });
  },
  getBrandByBrandId: (brand_id, callBack) => {
    db.query(
      `SELECT * FROM BRANDS WHERE brand_id = ?`,
      [brand_id],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  updateBrand: (data, callBack) => {
    db.query(
      `UPDATE BRANDS SET brand_name=? WHERE brand_id=?`,
      [data.brand_name, data.brand_id],
      (err, results) => {
        if (err) callBack(err);
        return callBack(null, results);
      }
    );
  },
  deleteBrand: (brand_id, callBack) => {
    db.query(
      `DELETE FROM BRANDS WHERE brand_id=?`,
      [brand_id],
      (err, results) => {
        if (err) callBack(err);
        // console.log(results);
        return callBack(null, results);
      }
    );
  },
};
