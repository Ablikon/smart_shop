import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm() {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission, e.g., perform a search with the query
    console.log('Search query:', query);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-input"
        placeholde="Search product..."
        type="search"
        value={query}
        onChange={handleInputChange}
      />
      <button className="search-button" type="submit">Поиск</button>
    </form>
  );
}

export default SearchForm;
