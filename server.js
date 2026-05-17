const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_DB_URI =
  process.env.MONGO_DB_URI || "mongodb://localhost:27017/globalKitchenDB";
console.log("MONGO_DB_URI:", MONGO_DB_URI);
app.use(express.json());
const recipeRoutes = require("./routes/recipeRoutes");

mongoose
  .connect(MONGO_DB_URI)
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(recipeRoutes);

app.get("/", (req, res) => {
  res.send("Global Kitchen API is running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
