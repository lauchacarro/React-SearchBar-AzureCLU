import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({handleSearch}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={() => handleSearch(searchTerm)}>
        <AiOutlineSearch />
      </button>
    </div>
  );
};

export default Search;
