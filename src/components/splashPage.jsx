import React from "react";
import Navigation from "./navigation";
import Modal from "./modal";

export default function splashPage(props) {
  return (
    <>
      <Navigation
        nav="/anime"
        navTwo="/games"
        navLabel="Anime"
        navLabelTwo="Games"
        pageTitle="Home"
      />
      {props.isAnimeOpen && (
        <Modal
          anime={props.anime}
          isAnimeOpen={props.isAnimeOpen}
          handleClose={props.handleClose}

        />
      )}
      {props.isGameOpen && (
        <Modal 
        game={props.game}
        isGameOpen={props.isGameOpen}
        handleClose={props.handleClose}
        handleStoreLinks={props.handleStoreLinks}
        handleIconClass={props.handleIconClass}
        />
      )}

      <div className="splash-container">
        <h1>Choose your Charactor!</h1>
        <div className="splash-center-container">
          <div
            className="splash-img-container"
            onClick={props.handleClickGame}
            style={{ height: "8.17rem" }}
          >
            <img
              src="https://i.ya-webdesign.com/images/transparent-sprites-video-game-8.gif"
              alt="Anime"
            />
          </div>
          <div
            className="splash-img-container"
            onClick={props.handleClickAnime}
          >
            <img
              src="https://i.pinimg.com/originals/e2/24/a1/e224a16bb3921d657b49789d35c49169.gif"
              alt="Game"
            />
          </div>
        </div>
      </div>
    </>
  );
}
