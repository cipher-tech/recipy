import React from 'react';
import { SearchForm } from '../../components/form/searchForm/SearchForm';
import { RecipeList } from '../../components/recipe/recipeList/RecipeList';
import './recipesPage.scss';

export const RecipesPage = () => {
      return (
            <section className="recipesPage">
                  <div className="container">
                        <SearchForm />
                        <RecipeList />
                  </div>
            </section>
      );
};
