import React from "react";
import { Link } from "react-router-dom";
import "./recipeitem.scss";

export const RecipeItem = ({ data }) => {
  console.log(data);
  return (
    <Link>
      <article className="recipe">
        <div className="recipe__img-box">
          {/* <img src="/public/gallery-12.jpg" alt="recipe image" /> */}
          <img src={data.image_url} alt="recipe image" />
        </div>
        <div className="recipe__content">
          <span className="title">{data.title}</span>
          <span className="publisher">Publisher: {data.publisher}</span>
        </div>
      </article>
    </Link>
  );
};
