import React, { useState, useEffect } from "react";
import Component from "../components/animePage";
import * as Yup from 'yup';
import get from "../utils/get";

export default function AnimePage() {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await get(
        `https://kitsu.io/api/edge/anime?page[limit]=6&page[offset]=1`
      );
      setAnimes(response.data);
    })();
  }, []);


  const _handleSearchSubmit = async ({search}) => {
    const title = search.replace(/\s/g, "-");
    const response = await get(
      `https://kitsu.io/api/edge/anime?filter[text]=${title}`
    );
    setAnimes(response.data);
  };

  const _validationSchema = () => {
    return Yup.object().shape({
      search: Yup.string()
        .required('Enter an anime')
        .min(2, 'Word is too short, Minimum: 2')
        .max(25,'Word is too long, Maximum: 25')
    })
  }

  return (
    <>
      <Component
        animes={animes}
        nav="/games"
        navLabel="Games"
        pageTitle="Anime"
        handleSearchSubmit={_handleSearchSubmit}
        validationSchema={_validationSchema}
      />
    </>
  );
}
