const express = require("express");
const router = express.Router();
const { getProgrammesByDay } = require("../controllers/programmeController");

// GET /api/programmes/:daycode
router.get("/programmes/:daycode", getProgrammesByDay);

module.exports = router;
