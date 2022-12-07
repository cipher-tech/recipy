import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { RecipeDetail } from "./pages/recipeDetail/RecipeDetail";
import { RecipesList } from "./pages/recipesList/RecipesList";

export const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipesList />} />
        <Route path="/detail" element={<RecipeDetail />} />
      </Routes>
    </Fragment>
  );
};
