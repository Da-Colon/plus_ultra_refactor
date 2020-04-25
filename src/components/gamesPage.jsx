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
import { GamesTitle, Image } from "../styles/text";

export default function GamesPage(props) {


  return (
    <MainContainer>
      <Navigation />

      <ToolBarContainer>
        <Select styles={selectStyle} />
        <form action="submit">
          <SearchBar type="text" placeholder="Search Games..." />
          <SearchButton type="submit">Search</SearchButton>
        </form>
      </ToolBarContainer>
      {props.gamesInfo.map((game, i) => (
        <InfoWrapper key={game.name}>
        <ContentContainer>
          <TitleContainer>
            <GamesTitle>{game.name}</GamesTitle>
          </TitleContainer>

          <MainInfoContainer>
            <ImageContainer>
              <Image src={game.background_image} />
            </ImageContainer>
            
            <FlexContainer>
              <DescriptionContainer>
                {game.description_raw}
              </DescriptionContainer>
              <LinksContainer>
                {/* Available Platform here */}
              </LinksContainer>
            </FlexContainer>

          </MainInfoContainer>
        </ContentContainer>

      </InfoWrapper>
        ))}
    </MainContainer>
  );
}
