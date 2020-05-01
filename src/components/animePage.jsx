import React from "react";
import Navigation from "../components/navigation";
import youtubeLogo from "../assets/youtubeLogo.png";
import Error from "./Error";
import { Formik } from "formik";

export default function AnimePage(props) {
  return (
    <>
      <Navigation
        nav={props.nav}
        navLabel={props.navLabel}
        pageTitle={props.pageTitle}
      />
      <div className="search-bar-container">
        <Formik
          initialValues={{
            search: "",
          }}
          onSubmit={(values) => props.handleSearchSubmit(values)}
          validationSchema={props.validationSchema}
        >
          {({ values, handleSubmit, handleChange, errors }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                onChange={handleChange}
                name="search"
                value={values.search}
                placeholder="Search Anime..."
              />
              <button type="submit">Search</button>
              {errors.search && <Error>{errors.search}</Error>}
            </form>
          )}
        </Formik>
      </div>
      <div className="main-container">
        {props.animes.map((anime) => (
          <div
            className="card"
            key={anime.attributes.slug}
            style={{
              backgroundImage: `url(${anime.attributes.posterImage.medium})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top center",
            }}
          >
            <h2>{anime.attributes.titles.en_jp}</h2>

              <div className="img-container">
                {anime.attributes.youtubeVideoId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${anime.attributes.youtubeVideoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={props.animeSlug}
                  ></iframe>
                ) : (
                  <a
                    href={`https://www.youtube.com/results?search_query=${anime.attributes.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img alt="Youtube Search" src={youtubeLogo} />
                  </a>
                )}
              </div>

              
                <p className="description">{anime.attributes.synopsis ? anime.attributes.synopsis : "No Description Available"}</p>
       
           
          </div>
        ))}
      </div>
    </>
  );
}
