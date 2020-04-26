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
import { GamesTitle, Image, IconImage } from "../styles/text";
import '@fortawesome/fontawesome-free/css/all.css'
import nintendoLogo from '../assets/nintendoLogo.png'

export default function GamesPage(props) {


  return (
    <MainContainer>
      <Navigation />

      <ToolBarContainer>
        <Select styles={selectStyle} />
        <form onSubmit={props.handleSearchSubmit}>
          <SearchBar type="text" onChange={props.handleSearchChange} value={props.searchValue} placeholder="Search Games..." />
          <SearchButton type="submit">Search</SearchButton>
        </form>
      </ToolBarContainer>
      {props.gamesInfo.map((game, i) => (
        <InfoWrapper key={game.name}>
          {/* {console.log(game)} */}
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
              <ul>
                <li>Availible On:</li>
                {game.parent_platforms.map(platform => (
                  <li key={platform.platform.name}>
                      <a href={props.handleStoreLinks(platform.platform.name, game.stores, game.name)} target="_blank" rel="noopener noreferrer">
                      {platform.platform.name === "Nintendo" ? (
                        <IconImage src={nintendoLogo} />
                        ) : (
                          <i className={props.handleIconClass(platform.platform.name)} />
                          )}
                      </a>
                    </li>
                  ))}
              </ul>
              </LinksContainer>
            </FlexContainer>

          </MainInfoContainer>
        </ContentContainer>

      </InfoWrapper>
        ))}
    </MainContainer>
  );
}
