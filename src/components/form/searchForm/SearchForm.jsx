import React, { useState, useEffect } from "react";
import "./searchform.scss";
import axios from "axios";

export const SearchForm = () => {
  //hooks
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  //methods
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
    console.log(query);
  };

  const getRecipes = async () => {
    const url =
      "https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886";
    const res = await axios.get(url);
    console.log(res.data.data);
    setRecipes(res.data.data);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
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
      <button className="search-btn" onClick={() => dispatch(toggleModal())}>
        <i>icon</i>
        <span>Search</span>
      </button>
    </form>
  );
};
