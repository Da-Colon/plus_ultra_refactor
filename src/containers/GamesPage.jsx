import React, { useEffect, useState} from "react";
import Component from "../components/gamesPage";
import get from "../utils/get";

export default function GamesPage(props) {
  const [gamesInfo, setGamesInfo] = useState([]);

  useEffect(() => {
    get(
      "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added&page_size=20"
    ).then((response) => {
      response.results.forEach(game => {
        get(
          `https://api.rawg.io/api/games/${game.slug.replace(/\?/g, " ")}`
        ).then((res) => {
          setGamesInfo((info) => [...info, res]);
        });
      });
    });
  }, []);

  const handleIconClass = (platformName) => {
    switch (platformName) {
      case "PlayStation":
        return "fab fa-playstation";
      case "PC":
        return "fab fa-windows";
      case "Xbox":
        return "fab fa-xbox";
      case "Apple Macintosh":
        return "fab fa-apple";
      case "Steam":
        return "fab fa-steam"
      case "Linux":
        return "fab fa-linux"
      case "Android":
        return "fab fa-android";
      case "iOS":
        return "fab fa-app-store-ios";
      default:
        return "";
    }
  };

  const handleStoreLinks = (platformName, stores, name) => {
    for (let i = 0; i < stores.length; i++) {
      const checkThis = platformName + " " + stores[i].store.name;
      switch (checkThis) {
        case "Xbox Xbox Store":
          return stores[i].url;
        case "PlayStation PlayStation Store":
          return stores[i].url;
        case "iOS App Store":
          return stores[i].url;
        case "Android Google Play":
          return stores[i].url;
        case "PC Steam":
        case "Apple Macintosh Steam":
          return stores[i].url;
        case "PlayStation Epic Games":
        case "PC Epic Games":
        case "Xbox Epic Games":
        case "Apple Macintosh Epic Games":
          return stores[i].url;
        default:
          break;
      }
    }
    return `https://www.google.com/search?q=${name}`;
  };

  return (
    <>
      <Component
        handleStoreLinks={handleStoreLinks}
        handleIconClass={handleIconClass}
        gamesInfo={gamesInfo}
      />
    </>
  );
}
