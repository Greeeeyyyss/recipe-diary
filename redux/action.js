// action types
export const ADD_RECIPE = 'ADD_RECIPE';
export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const TOGGLE_SAVE_RECIPE = 'TOGGLE_SAVE_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';

// action creators
export const addRecipe = newRecipe => {
  return {
    type: ADD_RECIPE,
    payload: newRecipe
  }
};

export const updateRecipe = updates => {
  return {
    type: UPDATE_RECIPE,
    payload: updates

  }
};

export const toggleSaveRecipe = recipe => {
  return {
    type: TOGGLE_SAVE_RECIPE,
    payload: recipe
  }
};

export const deleteRecipe = recipe => {
  return {
    type: DELETE_RECIPE,
    payload: recipe
  }
};