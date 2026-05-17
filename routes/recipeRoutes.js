const express = require("express");

const router = express.Router();

const {
  getRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  getRecipeById,
} = require("../controllers/recipeController");

router.route("/recipes").get(getRecipes).post(createRecipe);
router
  .route("/recipes/:id")
  .get(getRecipeById)
  .patch(updateRecipe)
  .delete(deleteRecipe);

module.exports = router;
