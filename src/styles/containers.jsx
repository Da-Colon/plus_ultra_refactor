import styled from 'styled-components'

export const Container = styled.div`
  width: 300px;
  height: 475px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const SplashContainer = styled.div`
  display:flex;
  height: 100%;
  align-items: center;
  justify-content: space-around;
`

export const SplashImageContainer = styled.div`
  width: 260px;
  height: 360px;
`

export const NavContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
`

export const MainContainer = styled.div`
  display:flex;
  height: 100%;
  flex-direction: column;
`

export const ToolBarContainer = styled.div`
  height: 64px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 16px;
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

export const ContentContainer = styled.div`
  border: solid orange;
  display: flex;
  flex-direction: column;
  height: 400px;
  background-color: rgba(255,255,255,0.2);
  margin-top: 32px;
`

export const TitleContainer = styled.div`
`

export const MainInfoContainer = styled.div`
  display: flex;
  box-sizing: content-box;
`

export const ImageContainer = styled.div`
  border: solid;
  width: 300px;
  height: 300px;
  margin: 32px;
`

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 16px;
  min-width: 300px;
  max-height: 400px; 
`

export const DescriptionContainer = styled.div`
  overflow-y: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
  display: none;
}
  text-align: center;
  margin: 16px;
  height: 300px;
  font-size: 1.1rem;
`

export const LinksContainer = styled.div`
  height: 64px;
  margin-bottom: 46px;

  ul{
    display: flex;
    align-items: center;
  }

  li{
    margin-left: 32px;
  }
`