import React, { useState } from "react";
import Search from "../components/Search";
import DropdownComponent from "../components/DropdownComponent";
import { getAzureAttempts, getPagesList } from "../api";

const Home = () => {
  const [itemsList, setItemsList] = useState([]);

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const attempts = getAzureAttempts();

      const matches = getMatches(attempts);
      setItemsList(matches);
    } else {
      setItemsList([]);
    }
  };

  const getMatches = (responseArray) => {
    //Importado desde src/data.js
    const pages = getPagesList();

    const filteredPagesList = pages.filter((page) =>
      responseArray.some(
        (response) => response.intent.toLowerCase() === page.page.toLowerCase()
      )
    );

    return filteredPagesList;
  };

  return (
    <div id="home-page">
      <Search handleSearch={handleSearch} />

      <DropdownComponent itemsList={itemsList} />
    </div>
  );
};

export default Home;
