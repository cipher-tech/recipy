import React from "react";
import { SearchForm } from "../../components/form/searchForm/SearchForm";
import { RecipeList } from "../../components/recipe/recipeList/RecipeList";

export const Recipes = () => {
  return (
    <section>
      <div className="container">
        <SearchForm />
        <RecipeList />
      </div>
    </section>
  );
};
