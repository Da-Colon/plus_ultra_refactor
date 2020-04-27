import React from "react";
import Select from "react-select";
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
  FlexContainer,
} from "../styles/containers";
import { SearchBar } from "../styles/inputs";
import { SearchButton } from "../styles/buttons";
import { selectStyle } from "../styles/selectStyle";
import { GamesTitle, Image} from "../styles/text";
import '@fortawesome/fontawesome-free/css/all.css'


export default function AnimePage(props) {
  return (
    <MainContainer>
      <Navigation page={props.page} />
      {/* <Select /> */}
      <ToolBarContainer>
        <Select styles={selectStyle} />
        <form onSubmit={props.handleSearchSubmit}>
        <SearchBar type="text" onChange={props.handleSearchChange} value={props.searchValue} placeholder="Search Anime..." />
          <SearchButton type="submit">Search</SearchButton>
        </form>
      </ToolBarContainer>
      {props.animes.map(anime => (

        <InfoWrapper key={anime.attributes.titles.en_jp}>
        <ContentContainer>
          <TitleContainer>
            <GamesTitle>{anime.attributes.titles.en_jp}</GamesTitle>
          </TitleContainer>

          <MainInfoContainer>
            <ImageContainer>
              <Image src={anime.attributes.posterImage.small} />
            </ImageContainer>
            
            <FlexContainer>
              <DescriptionContainer>
                {anime.attributes.synopsis}
              </DescriptionContainer>
              <LinksContainer>
                <a href={props.handleYoutubeLink(anime.attributes.youtubeVideoId, anime.attributes.slug)} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube"  />
                </a>
              </LinksContainer>
            </FlexContainer>

          </MainInfoContainer>
        </ContentContainer>

      </InfoWrapper>
        ))}
    </MainContainer>
  );
}
