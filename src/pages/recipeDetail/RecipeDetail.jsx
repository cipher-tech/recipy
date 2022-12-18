import React, { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { RecipeContext } from "../../context/recipe/RecipeProvider";

export const RecipeDetail = () => {
  const { getRecipe } = useContext(RecipeContext);
  const { id } = useParams();

  useEffect(() => {
    getRecipe(id);
  }, [id]);

  return (
    <section>
      <div className="container">recipe detail</div>
    </section>
  );
};
