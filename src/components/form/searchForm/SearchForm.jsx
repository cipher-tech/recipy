import React, { useState, useEffect, Fragment, useContext } from "react";
import "./searchform.scss";
import axios from "axios";
import { RecipeContext } from "../../../context/recipe/RecipeProvider";

export const SearchForm = () => {
  const { getSearchRecipes } = useContext(RecipeContext);

  //hooks
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  //methods
  const handleSubmit = (e) => {
    e.preventDefault();
    // getRecipesResult(query);
    setQuery("");
  };

  const handleChange = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
    console.log(query);
  };

  //   const getRecipe = async () => {
  //     const url =
  //       "https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886";
  //     const res = await axios.get(url);
  //     console.log(res.data.data);
  //     setRecipes(res.data.data);
  //   };

  //   const getRecipesResult = async (query) => {
  //     const url = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`;
  //     const res = await axios.get(url);
  //     console.log(res.data.data.recipes);
  //     setRecipes(res.data.data.recipes);
  //   };

  useEffect(() => {
    getSearchRecipes(query);
  }, [query]);

  return (
    <Fragment>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-group">
          <input
            className="search-field"
            type="text"
            placeholder="Search recipes"
            onChange={handleChange}
            value={query}
          />
          <i>X</i>
        </div>
        <button className="search-btn">
          <i>icon</i>
          <span>Search</span>
        </button>
      </form>
      {/* <recipes /> */}
    </Fragment>
  );
};
