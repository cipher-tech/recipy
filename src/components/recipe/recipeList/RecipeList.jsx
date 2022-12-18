import React, { useContext } from "react";
import { RecipeItem } from "../recipeItem/RecipeItem";
import "./recipelist.scss";
import { datas, data2 } from "../../../../datas";
import { RecipeContext } from "../../../context/recipe/RecipeProvider";
import { Skeleton } from "../skeleton/Skeleton";

export const RecipeList = () => {
  //context hook
  const {loading, recipes } = useContext(RecipeContext);

  //vars

  if (loading === true) {
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, , 9, 10, 11, 12];

      return (
        <div className=" recipes__container">
          {skeletons.map((x, i) => (
            <Skeleton key={i} />
          ))}
        </div>
      )}

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
