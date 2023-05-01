import {
  RiAccountCircleFill,
  RiSettings2Fill,
  RiSpyFill,
  RiStarFill,
} from "react-icons/ri";

export function getPagesList() {
  const pagesList = [
    {
      page: "Account",
      icon: RiAccountCircleFill,
    },
    {
      page: "Settings",
      icon: RiSettings2Fill,
    },
    {
      page: "Actiividad",
      icon: RiSpyFill,
    },
    {
      page: "Favoritos",
      icon: RiStarFill,
    },
  ];

  return pagesList;
}

export function getAzureAttempts() {
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

  return responseArray;
}
