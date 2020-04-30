import React from "react";
import Navigation from "../components/navigation";
import "@fortawesome/fontawesome-free/css/all.css";
import Error from "./Error";
import { Formik } from "formik";

export default function GamesPage(props) {
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
                placeholder="Search Games..."
              />
              <button type="submit">Search</button>
              {errors.search && <Error>{errors.search}</Error>}
            </form>
          )}
        </Formik>
      </div>
      {/* Info Wrapper */}
      <div className="main-container">
        {/* Card */}
        {props.gamesInfo.map((game, i) => (
          <div
            className="card"
            key={game.name}
            style={{
              backgroundImage: `url(${game.background_image_additional})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            {/* ContentContainer */}

            <h2>{game.name}</h2>

            <div className="img-container">
              <img alt={game.name} src={game.background_image} />
            </div>

            <div className="platforms-container">
              <ul>
                <li>Availible On:</li>
                {game.parent_platforms.map((platform) => (
                  <li key={platform.platform.name}>
                    <a
                      className="store-link"
                      href={props.handleStoreLinks(
                        platform.platform.name,
                        game.stores,
                        game.name
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "none" }}
                    >
                        <i
                          className={`--fa-secondary-color ${props.handleIconClass(
                            platform.platform.name
                          )} fa-2x`}
                        />
                      
                    </a>
                  </li>
                ))}
              </ul>
            </div>
              <p className="description">{game.description_raw}</p>
          </div>
        ))}
      </div>
    </>
  );
}
