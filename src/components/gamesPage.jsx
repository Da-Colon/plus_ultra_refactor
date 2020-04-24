import React from 'react'
import Select from 'react-select'
import Navigation from '../components/navigation'
import { MainContainer, ToolBarContainer } from '../styles/containers'
import { SearchBar } from '../styles/inputs'
import {SearchButton} from '../styles/buttons'
import {selectStyle} from '../styles/selectStyle'

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
    </MainContainer>
  )
}