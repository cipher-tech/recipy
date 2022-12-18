import React, { useReducer, createContext } from "react";
import axios from "axios";
import { GET_SEARCH_RECIPE, RECIPE_ERROR } from "../actionTypes";
import { recipeReducer } from "./recipeReducer";
export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const initialState = {
    recipes: [],
    recipe: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(recipeReducer, initialState);

  const baseUrl = "https://forkify-api.herokuapp.com/api/v2";

  const getSearchRecipes = async (query) => {
    try {
      const url = `${baseUrl}/recipes?search=${query}`;
      const res = await axios.get(url);
      console.log(res.data.data.recipes);
      dispatch({
        type: GET_SEARCH_RECIPE,
        payload: res.data.data.recipes,
      });
    } catch (err) {
      dispatch({
        type: RECIPE_ERROR,
        payload: err.response.msg,
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
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
