import React from "react";
import { RecipeItem } from "../recipeItem/RecipeItem";
import "./recipelist.scss";
import { datas, data2 } from "../../../../datas";

export const RecipeList = () => {
  return (
    <section className="recipes">
      <ul className="recipes__container">
        {data2.map((data) => (
          <RecipeItem data={data} />
        ))}
      </ul>
    </section>
  );
};
