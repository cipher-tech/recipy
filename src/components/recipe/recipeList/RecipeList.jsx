import React, { useContext } from "react";
import { RecipeItem } from "../recipeItem/RecipeItem";
import "./recipelist.scss";
import { datas, data2 } from "../../../../datas";
import { RecipeContext } from "../../../context/recipe/RecipeProvider";

export const RecipeList = () => {
  const { recipes } = useContext(RecipeContext);
  console.log(recipes);

  return (
    <section className="recipes">
      <ul className="recipes__container">
        {recipes.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))}
      </ul>
    </section>
  );
};

// export const RecipeList = () => {
//   return (
//     <section className="recipes">
//       <ul className="recipes__container">
//         {data2.map((recipe) => (
//           <RecipeItem recipe={recipe} />
//         ))}
//       </ul>
//     </section>
//   );
// };
