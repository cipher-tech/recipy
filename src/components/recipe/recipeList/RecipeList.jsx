import React, { useContext } from "react";
import { RecipeItem } from "../recipeItem/RecipeItem";
import "./recipelist.scss";
import { datas, data2 } from "../../../../datas";
import { RecipeContext } from "../../../context/recipe/RecipeProvider";

export const RecipeList = () => {
  const { loading, recipes } = useContext(RecipeContext);

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
//         {data2.map((data) => (
//           <RecipeItem data={data} />
//         ))}
//       </ul>
//     </section>
//   );
// };
