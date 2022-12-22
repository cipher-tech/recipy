import { Route, Routes } from "react-router-dom";
import { Layout } from "../../Layout";
//pages
import { Home } from "./home/Home";
import { RecipeDetail } from "./recipeDetail/RecipeDetail";
import { RecipesPage } from "./recipesPage/RecipesPage.jsx";
//context
import { RecipeProvider } from "../context/recipe/RecipeProvider";

export const Pages = () => {
  return (
    <RecipeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<Home />} />
          <Route path="recipes" element={<RecipesPage />} />
          <Route path="recipes/:id" element={<RecipeDetail />} />
        </Route>
      </Routes>
    </RecipeProvider>
  );
};
