import React from "react";
import Navigation from "../components/navigation";
import {
  MainContainer,
  ToolBarContainer,
  InfoWrapper,
  ContentContainer,
  MainInfoContainer,
  TitleContainer,
  ImageContainer,
  DescriptionContainer,
  LinksContainer,
  MediaContainer,
  VideoContainer,
} from "../styles/containers";
import { SearchBar, Form } from "../styles/inputs";
import { SearchButton } from "../styles/buttons";
import { GamesTitle, Image } from "../styles/text";
import "@fortawesome/fontawesome-free/css/all.css";

export default function AnimePage(props) {
  return (
    <MainContainer>
      <Navigation page={props.page} />
      <ToolBarContainer>
        <Form onSubmit={props.handleSearchSubmit}>
          <SearchBar
            type="text"
            onChange={props.handleSearchChange}
            value={props.searchValue}
            placeholder="Search Anime..."
          />
          <SearchButton type="submit">Search</SearchButton>
        </Form>
      </ToolBarContainer>
      <InfoWrapper>
        {props.animes.map((anime) => (
          <ContentContainer key={anime.attributes.titles.en_jp}>
            <TitleContainer>
              <GamesTitle>{anime.attributes.titles.en_jp}</GamesTitle>
            </TitleContainer>

            <MainInfoContainer>
              <MediaContainer>
                {props.step === 0 ? (
                  <ImageContainer>
                    <Image src={anime.attributes.posterImage.medium} />
                  </ImageContainer>
                ) : props.step === 1 ? (
                  <VideoContainer>
                    <iframe
                      src={props.handleYoutubeLink(
                        anime.attributes.youtubeVideoId,
                        anime.attributes.slug
                      )}
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </VideoContainer>
                ) : props.step === 2 && anime.attributes.coverImage ? (
                  <ImageContainer>
                    <Image src={anime.attributes.coverImage.tiny} />
                  </ImageContainer>
                ) : (
                  "" //Add No Image Graphic
                )}
              </MediaContainer>

              <DescriptionContainer>
                <p>{anime.attributes.synopsis}</p>
              </DescriptionContainer>

              <LinksContainer></LinksContainer>
            </MainInfoContainer>
          </ContentContainer>
        ))}
      </InfoWrapper>
    </MainContainer>
  );
}
