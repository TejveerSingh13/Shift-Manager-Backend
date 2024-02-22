const express = require("express");
const dotenv = require("dotenv").config();
const shiftsRoutes = require("./routes/shiftsRoutes");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");

connectDB();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/shifts", shiftsRoutes);
app.use("/api/users", userRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server runnning on port: ${PORT}...`);
});
