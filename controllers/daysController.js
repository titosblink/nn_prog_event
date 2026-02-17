const db = require("../config/db");

exports.getAllDays = (req, res) => {
  const sql = "SELECT * FROM days";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Error fetching days",
        error: err
      });
    }

    res.status(200).json(result);
  });
};


