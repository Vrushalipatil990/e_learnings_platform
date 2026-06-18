const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const courseRoutes = require("./routes/courseRoutes");

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const uploadRoutes = require("./routes/uploadRoutes");


const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/v1/courses", courseRoutes);
app.use("/api/upload", uploadRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});