const express = require("express");
const router = express.Router();
const { getAllDays } = require("../controllers/daysController");
const db = require("../config/db");   // ✅ ADD THIS

router.get("/days", getAllDays);

router.get("/day/:daycode", (req, res) => {
  const sql = "SELECT * FROM days WHERE daycode = ?";
  db.query(sql, [req.params.daycode], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result[0]);
  });
});

module.exports = router;
