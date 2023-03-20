const {
  createUser,
  getUserById,
  getUsers,
  updateUsers,
  deleteUser,
} = require("./Users.model");

module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    createUser(body, (err, results) => {
      if (err)
        res.json({
          essage: err.message || "Some error occurred while creating user.",
        });
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getUsers: (req, res) => {
    getUsers((err, results) => {
      if (err) return;
      if (!results[0]) res.json({ message: "Record not found" });
      return res.json({ data: results });
    });
  },
  getUserById: (req, res) => {
    const user_id = req.params.user_id;
    getUserById(user_id, (err, results) => {
      if (err) return;
      if (!results[0]) {
        return res.json({
          message: "Record not found",
        });
      }
      return res.json({ success: 1, data: results });
    });
  },
  updateUsers: (req, res) => {
    const data = req.body;
    updateUsers(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) res.json({ message: "Content must not be empty" });
      return res.json({
        success: 1,
        message: "Update invoice Successfully",
        data: results,
      });
    });
  },
  deleteUser: (req, res) => {
    const user_id = req.params.user_id;
    deleteUser(user_id, (err, results) => {
      if (err) return res.json({ success: 0, message: "user_idnot found" });
      //   console.log(results);
      if (!results) {
        return res.json({
          success: 0,
          message: "user_id  not found",
        });
      }
      if (results) {
        return res.json({
          success: 1,
          message: "Delete users  successfully.",
        });
      }
    });
  },
};
