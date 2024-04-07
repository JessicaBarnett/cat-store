import React from 'react';

import './search_field.css';
import { useNavigate } from 'react-router-dom';

export const SearchField: React.FC = () => {
  const navigate = useNavigate();

  const submitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget); // e.target v e.currentTarget: https://stackoverflow.com/questions/75285468/giving-html-form-to-formdata-through-event-target-is-throwing-argument-of-type
    const query = formData.get('query');

    if (query) {
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <form className="search-field" onSubmit={submitSearch}>
        <label htmlFor="query">
          <input name="query" id="query" type="text"></input>
          <button type="submit">search</button>
        </label>
    </form>
  );
};

export default SearchField;