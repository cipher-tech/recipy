import { GET_RECIPE, GET_SEARCH_RECIPE } from '../actionTypes';

export const recipeReducer = (state, action) => {
      switch (action.type) {
            case GET_SEARCH_RECIPE:
                  return {
                        ...state,
                        recipes: action.payload,
                        loading: false,
                  };
            case GET_RECIPE:
                  return {
                        ...state,
                        recipe: action.payload,
                        loading: false,
                  };
      }
};
