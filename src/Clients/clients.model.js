const db = require("../../config/db");

module.exports = {
  createClient: (data, callBack) => {
    db.query(
      `INSERT INTO Clients (client_id, user_id, client_name, client_email, client_primary_ph, client_secondary_ph) VALUES (?,?,?,?,?,?)`,
      [
        data.client_id,
        data.user_id,
        data.client_name,
        data.client_email,
        data.client_primary_ph,
        data.client_secondary_ph,
      ],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  getClients: (callBack) => {
    db.query(`SELECT * FROM Clients`, [], (err, results) => {
      if (err) callBack(err);
      callBack(null, results);
    });
  },
  getClientById: (client_id, callBack) => {
    db.query(
      `SELECT * FROM Clients WHERE client_id=?`,
      [client_id],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  updateClientById: (data, callBack) => {
    db.query(
      `UPDATE Clients SET user_id=?, client_name=?, client_email=?, client_primary_ph=?, client_secondary_ph=? WHERE client_id=?`,
      [
        data.user_id,
        data.client_name,
        data.client_email,
        data.client_primary_ph,
        data.client_secondary_ph,
        data.client_id,
      ],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
  deleteClientById: (client_id, callBack) => {
    db.query(
      `DELETE FROM Clients WHERE client_id=?`,
      [client_id],
      (err, results) => {
        if (err) callBack(err);
        callBack(null, results);
      }
    );
  },
};
