import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { RecipeDetail } from "./pages/recipeDetail/RecipeDetail";
import { Recipes } from "./pages/recipes/Recipes";

export const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/detail" element={<RecipeDetail />} />
      </Routes>
    </Fragment>
  );
};
