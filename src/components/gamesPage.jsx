import React from 'react'
import Select from 'react-select'
import Navigation from '../components/navigation'
import { MainContainer, ToolBarContainer, GamesWrapper, GameContainer, GameInfoContainer, GameTitleContainer, GamesImageContainer, GameDescriptionContainer, GamePlatformsContainer } from '../styles/containers'
import { SearchBar } from '../styles/inputs'
import {SearchButton} from '../styles/buttons'
import {selectStyle} from '../styles/selectStyle'
import { GamesTitle } from '../styles/text'

export default function GamesPage(props) {
  return (
    <MainContainer>
      <Navigation page={props.page}/>
      {/* <Select /> */}
      <ToolBarContainer>
        <Select 
          styles={selectStyle}
          />
        <form action="submit">
          <SearchBar type="text"placeholder="Search Games..." />
          <SearchButton type="submit" >Search</SearchButton>
        </form>
      </ToolBarContainer>
      <GamesWrapper>
        <GameContainer>
          <GameTitleContainer>
            <GamesTitle>PlaceHolder Title</GamesTitle>
          </GameTitleContainer>
          <GameInfoContainer>
            <GamesImageContainer>
              {/* Image goes here */}
            </GamesImageContainer>
            <GameDescriptionContainer>
              Commodo enim ex sit anim sunt aliquip ex tempor id eiusmod. Enim cupidatat enim irure ea velit cupidatat consequat minim tempor enim occaecat laboris aliquip ad. Commodo deserunt incididunt duis officia. Adipisicing ut commodo qui duis qui aliquip tempor.
              Commodo enim ex sit anim sunt aliquip ex tempor id eiusmod. Enim cupidatat enim irure ea velit cupidatat consequat minim tempor enim occaecat laboris aliquip ad. Commodo deserunt incididunt duis officia. Adipisicing ut commodo qui duis qui aliquip tempor.
            </GameDescriptionContainer>
            <GamePlatformsContainer>
              {/* Available Platform here */}
            </GamePlatformsContainer>
          </GameInfoContainer>
        </GameContainer>
      </GamesWrapper>
    </MainContainer>
  )
}