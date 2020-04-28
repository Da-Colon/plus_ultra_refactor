import styled from 'styled-components'

export const Container = styled.div`
  width: 18.75rem;
  height: 29.6875rem;
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
  width: 16.25rem;
  height: 22.5rem;
`

export const NavContainer = styled.div`
  align-items: center;
  background-color: rgb(0,0,0);
  display: flex;
  height: 4.6875rem;
  justify-content: space-around;
  padding: 1.5rem;
  position: fixed;
  top: 0;
  width: 100%;
`

export const MainContainer = styled.div`
  height: 100%;
  min-width: 18.75rem;
`

export const ToolBarContainer = styled.div`
  height: 4rem;
  width: 100%;
  margin-top: 6.25rem;
  margin-bottom: 3.125rem;
`

export const InfoWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  justify-content: space-around;

  div{
    margin: .5rem;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 2 41rem;
`

export const TitleContainer = styled.div`
  text-align: center;
`

export const MainInfoContainer = styled.div`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
`
export const MediaContainer = styled.div`
  background-color: rgba(0,0,0,0.8);
  height: 18.75rem;
  border-radius: 2.5rem;
  padding-bottom: 3rem;
`
export const ImageContainer = styled.div`
  max-width: 100%;
  min-width: 18.75rem;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 0 .5rem;
  
`

export const VideoContainer = styled.div`
  max-width: 100%;
  min-width: 18.75rem;
  height: 100%;

  iframe {
    width: 100%;
    height: 100%;
    border-radius: 2.5rem;
  }
`

export const DescriptionContainer = styled.div`
  overflow-y: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
  display: none;
}
  height: 18.75rem;


  p{
    margin: 0 1.5rem;
    font-size: 1.4em;
    color: rgb(255,255,255);
    word-spacing: 0.2em;
    line-height: 1.8em;
  }
`

export const LinksContainer = styled.div`
  height: 4rem;
  margin-bottom: 2.875;

  ul{
    display: flex;
    align-items: center;
  }

  li{
    margin-left: 1.5rem;
  }
`