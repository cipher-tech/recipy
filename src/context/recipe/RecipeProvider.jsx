import React, { useReducer, createContext } from 'react';
import axios from 'axios';
import { GET_RECIPE, GET_SEARCH_RECIPE, RECIPE_ERROR } from '../actionTypes';
import { recipeReducer } from './recipeReducer';
export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
      const initialState = {
            recipes: [],
            recipe: {},
            loading: true,
      };

      const [state, dispatch] = useReducer(recipeReducer, initialState);

      const baseUrl = 'https://forkify-api.herokuapp.com/api/v2/recipes';

      const getSearchRecipes = async (query) => {
            try {
                  const url = `${baseUrl}/?search=${query}`;
                  const res = await axios.get(url);
                  console.log(res.data.data.recipes);
                  dispatch({
                        type: GET_SEARCH_RECIPE,
                        payload: res.data.data.recipes,
                  });
            } catch (err) {
                  console.log(err);
                  dispatch({
                        type: RECIPE_ERROR,
                        payload: err.message,
                  });
            }
      };

      const getRecipe = async (id) => {
            try {
                  const url = `${baseUrl}/${id}`;
                  const res = await axios.get(url);
                  console.log(res);
                  dispatch({
                        type: GET_RECIPE,
                        payload: res.data.data.recipe,
                  });
            } catch (err) {
                  dispatch({
                        type: RECIPE_ERROR,
                        payload: err.message,
                  });
            }
      };

      return (
            <RecipeContext.Provider
                  value={{
                        recipes: state.recipes,
                        recipe: state.recipe,
                        loading: state.loading,
                        getSearchRecipes,
                        getRecipe,
                  }}
            >
                  {children}
            </RecipeContext.Provider>
      );
};
