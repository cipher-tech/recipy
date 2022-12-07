import React, { useState } from "react";
import "./searchform.scss";

export const SearchForm = () => {
  //hooks
  const [query, setQuery] = useState("");
  //methods
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
    console.log(query);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-group">
        <input className='search-field'
          type="text"
          placeholder="Search tasks"
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
