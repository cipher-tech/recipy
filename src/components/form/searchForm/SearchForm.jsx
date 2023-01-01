import React, { useState, useEffect, Fragment, useContext } from 'react';
import { RecipeContext } from '../../../context/recipe/RecipeProvider';
import './searchForm.scss';
export const SearchForm = () => {
      //context hook
      const { getSearchRecipes } = useContext(RecipeContext);

      //hooks
      const [query, setQuery] = useState('');

      //methods
      const handleSubmit = (e) => {
            e.preventDefault();
            setQuery('');
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
                        <input
                              className="search-field"
                              type="text"
                              placeholder="Search recipes"
                              onChange={handleChange}
                              value={query}
                        />
                        <span className="clear-btn">
                              <i>X</i>
                        </span>
                  </form>
            </Fragment>
      );
};
