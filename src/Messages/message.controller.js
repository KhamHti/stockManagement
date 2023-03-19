const {
  createMessage,
  getAllMessage,
  getMessageById,
  updateMessage,
  deleteMessage,
} = require("./message.model");

module.exports = {
  createMessage: (req, res) => {
    const data = req.body;
    createMessage(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "create message successfully",
        data: results,
      });
    });
  },
  getAllMessage: (req, res) => {
    getAllMessage((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      res.json({
        success: 1,
        data: results,
      });
    });
  },
  getMessageById: (req, res) => {
    const id = req.params.id;
    getMessageById(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results[0]) {
        res.json({
          success: 0,
          message: "Record not found",
        });
      }
      res.json({
        success: 1,
        data: results,
      });
    });
  },
  updateMessage: (req, res) => {
    const data = req.body;
    updateMessage(data, (err, results) => {
      if (err) return;
      res.json({
        success: 1,
        message: "update message successfully",
      });
    });
  },
  deleteMessage: (req, res) => {
    const id = req.params.id;
    deleteMessage(id, (err, results) => {
      if (err) return;
      res.json({
        success: 1,
        message: "delete message successfully",
      });
    });
  },
};
