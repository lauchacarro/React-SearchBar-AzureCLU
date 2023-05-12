import {
  RiLock2Fill,
  RiQuestionnaireFill,
  RiUser3Fill,
  RiZoomInFill,
  RiWalletFill,
} from "react-icons/ri";

export function getPagesList() {
  const pagesList = [
    {
      page: "Mi Cuenta",
      name: "MiCuenta",
      url: "/account",
      icon: RiUser3Fill,
    },
    {
      page: "Accesibilidad",
      name: "Accesibilidad",
      url: "/accessibility",
      icon: RiZoomInFill,
    },
    {
      page: "Pagar Servicios",
      name: "PagarServicios",
      url: "/services",
      icon: RiWalletFill,
    },
    {
      page: "Soporte Tecnico",
      name: "SoporteTecnico",
      url: "/support",
      icon: RiQuestionnaireFill,
    },
    {
      page: "Seguridad",
      name: "Seguridad",
      url: "/security",
      icon: RiLock2Fill,
    },
  ];

  return pagesList;
}

export function getAzureIntents(searchTerm) {
  const myHeaders = new Headers();
  myHeaders.append(
    "Ocp-Apim-Subscription-Key",
    "9d33e6d7415848d69d34e04bd6bd17d6"
  );
  myHeaders.append("Apim-Request-Id", "4ffcac1c-b2fc-48ba-bd6d-b69d9942995a");
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    kind: "Conversation",
    analysisInput: {
      conversationItem: {
        id: "1",
        text: searchTerm,
        modality: "text",
        language: "es",
        participantId: "1",
      },
    },
    parameters: {
      projectName: "SearchFeatures",
      verbose: true,
      deploymentName: "Alpha",
      stringIndexType: "TextElement_V8",
    },
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(
    "https://globalailatam2023predemo.cognitiveservices.azure.com/language/:analyze-conversations?api-version=2022-05-01",
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => {
      const intents = data?.result?.prediction?.intents?.filter(
        (x) => x.confidenceScore > 0.5
      );

      return intents;
    })
    .catch((error) => console.log("error", error));
}
