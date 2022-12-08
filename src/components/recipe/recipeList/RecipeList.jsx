import React from "react";
import { RecipeItem } from "../recipeItem/RecipeItem";
import "./recipelist.scss";
import { datas } from "../../../../datas";

export const RecipeList = () => {
  return (
    <section className='recipes'>
      <ul className="recipes__container">
        {datas.map((data) => (
          <RecipeItem />
        ))}
      </ul>
    </section>
  );
};
