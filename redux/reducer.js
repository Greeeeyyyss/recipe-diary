import {
  ADD_RECIPE,
  UPDATE_RECIPE,
  TOGGLE_SAVE_RECIPE,
  DELETE_RECIPE
} from './action'

export const reducer = (state = { recipes: [] }, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return { recipes: [...state.recipes, action.payload] };
    case UPDATE_RECIPE:
      return {
        recipes: state.recipes.map(recipe => {
          if (recipe.name === action.payload.currentRecipe.name) {
            return action.payload.updatedRecipe;
          }
          return recipe;
        })
      };
    case TOGGLE_SAVE_RECIPE:
      return {
        recipes: state.recipes.map(recipe => {
          if (recipe.name === action.payload.name) {
            return {
              ...action.payload,
              isSaved: !recipe.isSaved
            }
          }
          return recipe;
        })
      };
    case DELETE_RECIPE:
      return {
        recipes: state.recipes.filter(recipe => recipe.name !== action.payload.name)
      };
    default:
      return state;
  }
};