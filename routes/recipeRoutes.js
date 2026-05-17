const express = require("express");

const router = express.Router();

const {
  getRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  getRecipeById,
} = require("../controllers/recipeController");

router.get("/recipes", getRecipes);
router.get("/recipes/:id", getRecipeById);

router.post("/recipes", createRecipe);

router.patch("/recipes/:id", updateRecipe);

router.delete("/recipes/:id", deleteRecipe);

module.exports = router;
