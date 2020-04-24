import styled from 'styled-components'

export const Container = styled.div`
  border: solid white;
  width: 300px;
  height: 475px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const SplashContainer = styled.div`
  border: 2px solid red;
  display:flex;
  height: 100%;
  align-items: center;
  justify-content: space-around;
`

export const SplashImageContainer = styled.div`
  border: green solid;
  width: 260px;
  height: 360px;
`

export const NavContainer = styled.div`
  border: solid white;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
`

export const MainContainer = styled.div`
  border: 2px solid red;
  display:flex;
  height: 100%;
  flex-direction: column;
`

export const ToolBarContainer = styled.div`
  border: solid yellow;
  height: 64px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 16px;
`

export const GamesWrapper = styled.div`
  border: solid blue;
  height: 100%;
  width: 100%;
`

export const GameContainer = styled.div`
  border: solid orange;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
  background-color: rgba(255,255,255,0.2);
  margin-top: 32px;
`

export const GameTitleContainer = styled.div`
  border: solid red;
`

export const GameInfoContainer = styled.div`
  border: solid;
  display: flex;
  box-sizing: content-box;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`

export const GamesImageContainer = styled.div`
  border: solid darkgreen;
  width: 300px;
  height: 250px;
  margin: 32px;
`

export const GameDescriptionContainer = styled.div`
  border: solid darkred;
  height: 50%;
  overflow-y: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
  display: none;
}
  width: fit-content;
  text-align: center;
  margin: 24px;
  font-size: 1.1rem;
`

export const GamePlatformsContainer = styled.div`
  border: solid cyan;
  height: 100%;
  width: 300px;
`