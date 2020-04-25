import React, { useEffect, useState } from "react";
import Component from "../components/gamesPage";
import get from "../utils/get";

export default function GamesPage(props) {
  const [gameTitles, setGameTitles] = useState([]);
  const [gamesInfo, setGamesInfo] = useState([]);

  useEffect(() => {
    getGameTitles()
  }, [])

  useEffect(() => {
    gameTitles.forEach((title, i) => {
      get(`https://api.rawg.io/api/games/${title.slug.replace(/\?/g, " ")}`).then(res => {
      setGamesInfo(info => [...info, res])
    })
  })
  },[gameTitles])



  const getGameTitles = async () => {
    const response = await get(
      "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added&page_size=10"
    )
    await setGameTitles(response.results)
  } 

  return (
    <>
      <Component gamesInfo={gamesInfo} />
    </>
  )
}
