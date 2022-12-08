import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../Layout";
import { Home } from "./pages/home/Home";
import { RecipeDetail } from "./pages/recipeDetail/RecipeDetail";
import { Recipes } from "./pages/recipes/Recipes";

export const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<Home />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="recipes/:id" element={<RecipeDetail />} />
        </Route>
      </Routes>
    </Fragment>
  );
};
