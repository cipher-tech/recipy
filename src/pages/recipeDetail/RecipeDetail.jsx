import React, { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { RecipeContext } from "../../context/recipe/RecipeProvider";
//style
import "./recipeDetail.scss";

export const RecipeDetail = () => {
  const { getRecipe, recipe } = useContext(RecipeContext);
  const { id } = useParams();

  useEffect(() => {
    getRecipe(id);
  }, [id]);

  return (
    <section>
      <div className="container">
        <div className="content">
          <h1>{recipe?.title}</h1>
          <div className="img-box">
            <img src={recipe?.image_url} alt="recipe img" />
          </div>

          <div className="recipe-content">
            <div className="recipe__ingredients">
              <h2 className="heading--2">Recipe ingredients</h2>
              <ul className="recipe__ingredient-list">
                <li className="recipe__ingredient">
                  <svg className="recipe__icon">
                    <use href="src/img/icons.svg#icon-check"></use>
                  </svg>
                  <div className="recipe__quantity">1000</div>
                  <div className="recipe__description">
                    <span className="recipe__unit">g</span>
                    pasta
                  </div>
                </li>

                <li className="recipe__ingredient">
                  <svg className="recipe__icon">
                    <use href="src/img/icons.svg#icon-check"></use>
                  </svg>
                  <div className="recipe__quantity">0.5</div>
                  <div className="recipe__description">
                    <span className="recipe__unit">cup</span>
                    ricotta cheese
                  </div>
                </li>
              </ul>
            </div>

            <div className="recipe__directions">
              <h2 className="heading--2">How to cook it</h2>
              <p className="recipe__directions-text">
                This recipe was carefully designed and tested by
                <span className="recipe__publisher"> {recipe?.publisher}</span>.
                Please check out directions at their website.
              </p>
              <a
                className="btn--small recipe__btn"
                href={recipe?.source_url}
                target="_blank"
              >
                <span>Directions</span>
                <svg className="search__icon">
                  <use href="src/img/icons.svg#icon-arrow-right"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
