const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
const recipeRoutes = require("./routes/recipeRoutes");

mongoose
  .connect("mongodb://localhost:27017/globalKitchenDB")
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

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
