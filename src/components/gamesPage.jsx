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
  Card,
} from "../styles/containers";
import { SearchBar, Form } from "../styles/inputs";
import { SearchButton } from "../styles/buttons";
import { GamesTitle, Image, IconImage, StoreLink } from "../styles/text";
import "@fortawesome/fontawesome-free/css/all.css";
import nintendoLogo from "../assets/nintendoLogo.png";

export default function GamesPage(props) {
  return (
    <MainContainer>
      <Navigation nav={props.nav} navLabel={props.navLabel} pageTitle={props.pageTitle} />

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
          <Card
            key={game.name}
            style={{
              backgroundImage: `url(${game.background_image_additional})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
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
                <LinksContainer>
                  <ul>
                    <li>Availible On:</li>
                    {game.parent_platforms.map((platform) => (
                      <li key={platform.platform.name}>
                        <StoreLink
                          href={props.handleStoreLinks(
                            platform.platform.name,
                            game.stores,
                            game.name
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{textDecoration:"none", color: "none"}}
                        >
                          {platform.platform.name === "Nintendo" ? (
                            <IconImage src={nintendoLogo} />
                          ) : (
                            <i
                              className={`--fa-secondary-color ${props.handleIconClass(
                                platform.platform.name
                              )} fa-2x`}
                            />
                          )}
                        </StoreLink>
                      </li>
                    ))}
                  </ul>
                </LinksContainer>
                <DescriptionContainer>
                  <p>{game.description_raw}</p>
                </DescriptionContainer>
              </MainInfoContainer>
            </ContentContainer>
          </Card>
        ))}
      </InfoWrapper>
    </MainContainer>
  );
}
