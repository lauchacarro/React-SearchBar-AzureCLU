import React, { useState } from "react";
import Search from "../components/Search";
import DropdownComponent from "../components/DropdownComponent";
import { getAzureIntents, getPagesList } from "../api";

const Home = () => {
  const [itemsList, setItemsList] = useState([]);

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      getAzureIntents(searchTerm).then((intents) => {
        const matches = getMatches(intents);
        setItemsList(matches);
      });

      
    } else {
      setItemsList([]);
    }
  };

  const getMatches = (responseArray) => {
    //Importado desde src/data.js
    const pages = getPagesList();

    const filteredPagesList = pages.filter((page) =>
      responseArray.some(
        (response) => response.category.toLowerCase() === page.name.toLowerCase()
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
