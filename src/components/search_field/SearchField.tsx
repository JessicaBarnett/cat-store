import React from 'react';
import './search_field.css';


export const SearchField: React.FC = () => {
  return (
    <div className="search-field">
        <label>
          <input type="text"></input>
          <button type="submit">search</button>
        </label>
    </div>
  );
};

export default SearchField;