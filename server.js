require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const daysRoute = require("./routes/daysRoute");

app.use("/api", daysRoute);

const programmeRoute = require("./routes/programmeRoute");
app.use("/api", programmeRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
