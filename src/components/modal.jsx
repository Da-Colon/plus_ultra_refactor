import React from "react";
import youtubeLogo from "../assets/youtubeLogo.png";

export default function Modal(props) {
  return (
    <>
    
      <div className="overlay"></div>
      <div className="dialog" onClick={props.handleClose}>
    {props.game && (
        <div
          id="card"
          className="card"
          style={{
            backgroundImage: `url(${props.game.background_image_additional})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          >
          <h2>{props.game.name}</h2>

          <div className="img-container">
            <img alt={props.game.name} src={props.game.background_image} />
          </div>
          <div className="platforms-container">
            <ul>
              <li>Availible On:</li>
              {props.game.parent_platforms.map((platform) => (
                <li key={platform.platform.name}>
                  <a
                    className="store-link"
                    href={props.handleStoreLinks(
                      platform.platform.name,
                      props.game.stores,
                      props.game.name
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
          <p className="description">{props.game.description_raw}</p>
        </div>
        )}

      {props.anime && (
        
        <div
            className="card"
            style={{
              backgroundImage: `url(${props.anime.attributes.posterImage.medium})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top center",
            }}
          >
             {console.log(props.anime)}
            <h2>{props.anime.attributes.titles.en_jp}</h2>

              <div className="img-container">
                {props.anime.attributes.youtubeVideoId ? (
                  <iframe
                  src={`https://www.youtube.com/embed/${props.anime.attributes.youtubeVideoId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={props.animeSlug}
                  ></iframe>
                  ) : (
                    <a
                    href={`https://www.youtube.com/results?search_query=${props.anime.attributes.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <img alt="Youtube Search" src={youtubeLogo} />
                  </a>
                )}
              </div>

              
                <p className="description">{props.anime.attributes.synopsis ? props.anime.attributes.synopsis : "No Description Available"}</p>
              </div>
              )}
        <button onClick={props.handleClose}>Cancel</button>
      </div>
    </>
  );
}
