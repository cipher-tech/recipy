import React, { useState, useEffect, Fragment, useContext } from "react";
import { RecipeContext } from "../../../context/recipe/RecipeProvider";
import { Icon } from "../../atoms/icon/Icon";
import "./searchForm.scss";

export const SearchForm = () => {
  //context hook
  const { getSearchRecipes } = useContext(RecipeContext);

  //hooks
  const [query, setQuery] = useState("");

  //methods
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery("");
  };

  const handleChange = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
    console.log(query);
  };

  //   useEffect(() => {
  //     getSearchRecipes(query);
  //   }, [query]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query) getSearchRecipes(query);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
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
          <Icon icon="user" />
          <span>Search</span>
        </button>
      </form>
      {/* <recipes /> */}
    </Fragment>
  );
};
