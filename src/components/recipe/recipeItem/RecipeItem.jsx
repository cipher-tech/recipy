import React from "react";
import { Link } from "react-router-dom";
import "./recipeitem.scss";

export const RecipeItem = () => {
  return (
    <Link>
      <article className="recipe">
        <div className="recipe__img-box">
          <img src="/public/gallery-12.jpg" alt="recipe image" />
        </div>
        <div className="recipe__content">
          <span className="title">Title</span>
          <span className="publisher">Publisher: {}</span>
          <a href=""> See details</a>
        </div>
      </article>
    </Link>
  );
};
