const express = require("express");

const router = express.Router();

const {
  getRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");

router.get("/recipes", getRecipes);

router.post("/recipes", createRecipe);

router.patch("/recipes/:id", updateRecipe);

router.delete("/recipes/:id", deleteRecipe);

module.exports = router;
