const {
  createClient,
  getClientById,
  getClients,
  updateClientById,
  deleteClientById,
} = require("./clients.model");

module.exports = {
  createClient: (req, res) => {
    const data = req.body;
    createClient(data, (err, results) => {
      if (err) return;
      if (results)
        res.json({
          success: 1,
          data: results,
          message: "Create client successfully",
        });
    });
  },
  getClients: (req, res) => {
    getClients((err, results) => {
      if (err) res.json({ message: err.message });
      res.json({ success: 1, data: results });
    });
  },
  getClientById: (req, res) => {
    const client_id = req.params.client_id;
    getClientById(client_id, (err, results) => {
      if (err) res.json({ message: err.message });
      if (!results[0]) res.json({ message: err.message || "record not found" });
      res.json({ success: 1, data: results });
    });
  },
  updateClientById: (req, res) => {
    const data = req.body;
    updateClientById(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "Update client successfully",
      });
    });
  },
  deleteClientById: (req, res) => {
    const client_id = req.params.client_id;
    deleteClientById(client_id, (err, results) => {
      if (err) return res.json({ message: err.message });
      if (!results) res.json({ success: 0, message: "Record not found" });
      if (results)
        res.json({ success: 1, message: "Delete client successfully" });
    });
  },
};
