import React from 'react'
import Navigation from '../components/navigation'
import { MainContainer } from '../styles/containers'

export default function GamesPage(props) {
  return (
    <MainContainer>
      <Navigation page={props.page}/>
    </MainContainer>
  )
}