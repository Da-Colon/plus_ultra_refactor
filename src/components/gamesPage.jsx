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
  MediaContainer,
} from "../styles/containers";
import { SearchBar, Form } from "../styles/inputs";
import { SearchButton } from "../styles/buttons";
import { GamesTitle, Image, IconImage } from "../styles/text";
import "@fortawesome/fontawesome-free/css/all.css";
import nintendoLogo from "../assets/nintendoLogo.png";

export default function GamesPage(props) {
  return (
    <MainContainer>
      <Navigation />

      <ToolBarContainer>
        <Form onSubmit={props.handleSearchSubmit}>
          <SearchBar
            type="text"
            onChange={props.handleSearchChange}
            value={props.searchValue}
            placeholder="Search Games..."
          />
          <SearchButton type="submit">Search</SearchButton>
        </Form>
      </ToolBarContainer>
      <InfoWrapper>
        {props.gamesInfo.map((game, i) => (

          <ContentContainer key={game.name}>

            <TitleContainer>
              <GamesTitle>{game.name}</GamesTitle>
            </TitleContainer>

            <MainInfoContainer>

              <MediaContainer>

              <ImageContainer>
                <Image src={game.background_image} />
              </ImageContainer>

              </MediaContainer>
              
                <DescriptionContainer>
                  <p>{game.description_raw}</p>
                </DescriptionContainer>
                <LinksContainer>
                  <ul>
                    <li>Availible On:</li>
                    {game.parent_platforms.map((platform) => (
                      <li key={platform.platform.name}>
                        <a
                          href={props.handleStoreLinks(
                            platform.platform.name,
                            game.stores,
                            game.name
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {platform.platform.name === "Nintendo" ? (
                            <IconImage src={nintendoLogo} />
                          ) : (
                            <i
                              className={props.handleIconClass(
                                platform.platform.name
                              )}
                            />
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </LinksContainer>
            </MainInfoContainer>
          </ContentContainer>
        ))}
      </InfoWrapper>
    </MainContainer>
  );
}
