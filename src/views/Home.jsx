import React, { useState } from "react";
import Search from "../components/Search";
import DropdownComponent from "../components/DropdownComponent";
import { pagesList } from "../data";

const responseArray = [
  {
    intent: "Settings",
  },
  {
    intent: "Favoritos",
  },
  {
    intent: "Favoritos",
  },
];

function apiReturn() {
  return responseArray;
}

const Home = () => {
  const [itemsList, setItemsList] = useState([]);

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const apiResponse = apiReturn();

      const matches = manageMatches(apiResponse);
      setItemsList(matches);
    } else {
      setItemsList([]);
    }
  };

  const manageMatches = (responseArray) => {
    //Importado desde src/data.js
    const pages = pagesList;

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
