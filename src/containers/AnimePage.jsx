import React, { useState, useEffect } from "react";
import Component from "../components/animePage";
import get from "../utils/get";

export default function AnimePage() {
  const [animes, setAnimes] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    (async () => {
      const response = await get(
        `https://kitsu.io/api/edge//anime?page[limit]=10&page[offset]=5`
      );
      setAnimes(response.data);
    })();
  }, []);


  const _handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const _handleSearchSubmit = async (e) => {
    e.preventDefault();
    const title = searchValue.replace(/\s/g, "-");
    const response = await get(
      `https://kitsu.io/api/edge/anime?filter[text]=${title}`
    );
    response.data.length ? setAnimes(response.data) : alert("Anime Not Found");
  };

  const _handleBackground = (e, image) => {
    let style = e.target.style
    style = {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgrondPosition: "center",
      backgroundRepeat: "no-repeat"
    }
  }

  return (
    <>
      <Component
        animes={animes}
        nav="/games"
        navLabel="Games"
        pageTitle="Anime"
        searchValue={searchValue}
        handleSearchChange={_handleSearchChange}
        handleSearchSubmit={_handleSearchSubmit}
        handleBackground={_handleBackground}
      />
    </>
  );
}
