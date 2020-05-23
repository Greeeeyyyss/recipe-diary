
import {
	ADD_RECIPE,
	UPDATE_RECIPE,
	SAVE_RECIPE,
	UNSAVE_RECIPE,
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
		case SAVE_RECIPE: 
			console.log('Save Recipe: ', action.payload);
			return {};
		case UNSAVE_RECIPE:
			console.log('Unsave Recipe: ', action.payload);
			return {};	
		case DELETE_RECIPE:
			console.log('Delete Recipe: ', action.payload);
			return {};
		default: 
			return state;	
	}
};