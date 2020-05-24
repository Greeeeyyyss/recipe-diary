import {
  ADD_RECIPE,
  UPDATE_RECIPE,
  TOGGLE_SAVE_RECIPE,
  DELETE_RECIPE
} from './action'

export const reducer = (state = { recipes: [] }, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      console.log('Add Recipe: ', action.payload);
      return { recipes: [...state.recipes, action.payload] };
    case UPDATE_RECIPE:
      console.log('Update Recipe: ', action.payload);
      return {};
    case TOGGLE_SAVE_RECIPE:
      console.log('Toggle save Recipe: ', action.payload);
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
      console.log('Delete Recipe: ', action.payload);
      return {
        recipes: state.recipes.filter(recipe => recipe.name !== action.payload.name)
      };
    default:
      return state;
  }
};