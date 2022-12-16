import { createContext, useReducer } from "react";
import { recipeReducer } from "./recipeReducer";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const initialState = {
    recipes: null,
    recipe: null,
    error: null,
  };

  const [state, dispatch] = useReducer(recipeReducer, initialState);

  return (
    <RecipeContext.Provider value={{ state: state, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
};
