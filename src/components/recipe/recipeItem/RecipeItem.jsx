import React from "react";
import { Link } from "react-router-dom";
import "./recipeitem.scss";

export const RecipeItem = () => {
  return (
    <Link>
      <article className="recipe">
        <div className="recipe__img-box">
          <img src="" alt="recipe image" />
        </div>
        <div className="recipe__content">recipe content</div>
      </article>
    </Link>
  );
};
