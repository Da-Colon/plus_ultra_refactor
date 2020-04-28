import React, { useEffect, useState} from "react";
import Component from "../components/gamesPage";
import get from "../utils/get";

export default function GamesPage(props) {
  const [gamesInfo, setGamesInfo] = useState([])
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    (async ()=> {
      const responseGamesTitles = await get("https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&page_size=5")
      responseGamesTitles.results.forEach(async game => {
        const responseGames = await get(`https://api.rawg.io/api/games/${game.slug.replace(/\?/g, " ")}`)
        setGamesInfo((info) => [...info, responseGames]);
    })
  })()
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
        case "PlayStation PlayStation Store":
        case "iOS App Store":
        case "Android Google Play":
        case "PC Steam":
        case "Apple Macintosh Steam":
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

  const handleSearchChange = e => {
    setSearchValue(e.target.value)
  }

  const handleSearchSubmit = async e => {
    e.preventDefault()
      const title = searchValue.replace(/\s/g, "-")
      const response = await get(`https://api.rawg.io/api/games/${title}`)
      response.detail && response.detail === "Not Found" ?  
      ( alert("Game Not Found") ) : (
        setGamesInfo([response])
      )
    }

  return (
    <>
      <Component
        handleSearchChange={handleSearchChange}
        handleSearchSubmit={handleSearchSubmit}
        handleStoreLinks={handleStoreLinks}
        handleIconClass={handleIconClass}
        searchValue={searchValue}
        gamesInfo={gamesInfo}
      />
    </>
  );
}
