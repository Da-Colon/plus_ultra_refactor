import React from "react";
import Navigation from "../components/navigation";
import {
  MainContainer,
  ToolBarContainer,
  InfoWrapper,
  ContentContainer,
  MainInfoContainer,
  TitleContainer,
  DescriptionContainer,
  LinksContainer,
  Card,
  ImageContainer,
  MediaContainer,
  VideoContainer,
} from "../styles/containers";
import { SearchBar, Form } from "../styles/inputs";
import { SearchButton } from "../styles/buttons";
import { GamesTitle, Image } from "../styles/text";
import youtubeLogo from '../assets/youtubeLogo.png'

export default function AnimePage(props) {
  return (
    <MainContainer>
      <Navigation nav={props.nav} navLabel={props.navLabel} pageTitle={props.pageTitle} />
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
          <Card
            key={anime.attributes.slug}
            style={{
              backgroundImage: `url(${anime.attributes.posterImage.medium})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <ContentContainer>
              <TitleContainer>
                <GamesTitle>{anime.attributes.titles.en_jp}</GamesTitle>
              </TitleContainer>

              <MainInfoContainer>
                  <MediaContainer>     
                {anime.attributes.youtubeVideoId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${anime.attributes.youtubeVideoId}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={props.animeSlug}
                      ></iframe>
                      ) : (
                        <a href={`https://www.youtube.com/results?search_query=${anime.attributes.slug}`}><img src={youtubeLogo} /></a>
                      )}

                </MediaContainer>

                <DescriptionContainer>
                  <p>{anime.attributes.synopsis}</p>
                </DescriptionContainer>
              </MainInfoContainer>
            </ContentContainer>
          </Card>
        ))}
      </InfoWrapper>
    </MainContainer>
  );
}
