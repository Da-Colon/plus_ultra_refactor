import React, { useState, useEffect } from "react";
import Component from "../components/splashPage";
import get from "../utils/get";

const SplashPage = () => {
  const [game, setGame] = useState({});
  const [anime, setAnime] = useState({});
  const [isGameOpen, setGameOpen] = useState(false);
  const [isAnimeOpen, setAnimeOpen] = useState(false);

  useEffect(() => {
    get(`https://api.rawg.io/api/games/kirby-triple-deluxe`).then((res) =>
      setGame(res)
    );
  }, [isGameOpen]);

  useEffect(() => {
    get(
      `https://kitsu.io/api/edge/anime?filter[text]=dragon-ball-super`
    ).then((res) => setAnime(res.data[0]));
  }, [isAnimeOpen]);

  const _handleClickAnime = () => {
    setGameOpen(false);
    setAnimeOpen(true);
  };

  const _handleClickGame = () => {
    setAnimeOpen(false);
    setGameOpen(true);
  };

  const _handleClose = (e) => {
    const card = document.querySelector(".card");
    if (e.target !== card && !card.contains(e.target)) {
      setGameOpen(false);
      setAnimeOpen(false);
    }
  };

  const _handleIconClass = (platformName) => {
    switch (platformName) {
      case "PlayStation":
        return "fab fa-playstation";
      case "PC":
        return "fab fa-windows";
      case "Xbox":
        return "fab fa-xbox";
      case "Nintendo":
        return "fab fa-neos";
      case "Apple Macintosh":
        return "fab fa-apple";
      case "Steam":
        return "fab fa-steam";
      case "Linux":
        return "fab fa-linux";
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
  return (
    <>
      <Component
        game={game}
        anime={anime}
        isGameOpen={isGameOpen}
        isAnimeOpen={isAnimeOpen}
        handleClickGame={_handleClickGame}
        handleClickAnime={_handleClickAnime}
        handleClose={_handleClose}
        handleStoreLinks={_handleStoreLinks}
        handleIconClass={_handleIconClass}
      />
    </>
  );
};

export default SplashPage;
