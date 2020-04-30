import React, { useEffect, useState} from "react";
import Component from "../components/gamesPage";
import get from "../utils/get";
import * as Yup from 'yup';

export default function GamesPage(props) {
  const [gamesInfo, setGamesInfo] = useState([])

  useEffect(() => {
    (async ()=> {
      const responseGamesTitles = await get("https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=+rating&page_size=10")
      responseGamesTitles.results.forEach(async game => {
        const responseGames = await get(`https://api.rawg.io/api/games/${game.slug.replace(/\?/g, " ")}`)
        setGamesInfo((info) => [...info, responseGames]);
    })
  })()
  }, []);

  const _handleIconClass = (platformName) => {
    switch (platformName) {
      case "PlayStation":
        return "fab fa-playstation";
      case "PC":
        return "fab fa-windows";
      case "Xbox":
        return "fab fa-xbox";
      case "Nintendo":
        return "fab fa-neos"
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

  const _handleStoreLinks = (platformName, stores, name) => {
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

  const _handleSearchSubmit = async ({search}) => {
      const title = search.replace(/\s/g, "-")
      const response = await get(`https://api.rawg.io/api/games/${title}`)
      response.detail && response.detail === "Not Found" ?  
      ( alert("Game Not Found") ) : (
        setGamesInfo([response])
      )
    }

    const _validationSchema = () => {
      return Yup.object().shape({
        search: Yup.string()
          .required('Enter a title')
          .min(2, 'Word is too short, Minimum: 2')
          .max(25,'Word is too long, Maximum: 25')
      })
    }

  return (
    <>
      <Component
        gamesInfo={gamesInfo}
        nav="/anime"
        navLabel="Anime"
        pageTitle="Games"
        handleSearchSubmit={_handleSearchSubmit}
        handleStoreLinks={_handleStoreLinks}
        handleIconClass={_handleIconClass}
        validationSchema={_validationSchema}
      />
    </>
  );
}
