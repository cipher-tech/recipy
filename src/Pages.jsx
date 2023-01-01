import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout';
//pages
import { Home } from './pages/home/Home';
import { RecipeDetail } from './pages/recipeDetail/RecipeDetail';
//context
import { RecipeProvider } from './context/recipe/RecipeProvider';
import { RecipesPage } from './pages/recipesPage/RecipesPage';

export const Pages = () => {
      return (
            <RecipeProvider>
                  <Routes>
                        <Route path="/" element={<Layout />}>
                              <Route path="/" index element={<Home />} />
                              <Route path="recipes" element={<RecipesPage />} />
                              <Route
                                    path="recipes/:id"
                                    element={<RecipeDetail />}
                              />
                        </Route>
                  </Routes>
            </RecipeProvider>
      );
};
