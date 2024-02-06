const express = require("express");
const dotenv = require("dotenv").config();
const shiftsRoutes = require("./routes/shiftsRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/shifts", shiftsRoutes);

app.listen(PORT, () => {
  console.log(`Server runnning on port: ${PORT}...`);
});
