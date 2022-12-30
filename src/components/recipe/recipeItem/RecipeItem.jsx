import React from 'react';
import { Link } from 'react-router-dom';
import './recipeitem.scss';

export const RecipeItem = ({ recipe }) => {
      return (
            <Link to={`/recipes/${recipe?.id}`}>
                  <article className="recipe">
                        <div className="recipe__img-box">
                              {/* <img src="/public/gallery-12.jpg" alt="recipe image" /> */}
                              <img src={recipe?.image_url} alt="recipe image" />
                        </div>
                        <div className="recipe__content">
                              <span className="title">{recipe?.title}</span>
                              <span className="publisher">
                                    Publisher: {recipe?.publisher}
                              </span>
                        </div>
                  </article>
            </Link>
      );
};
