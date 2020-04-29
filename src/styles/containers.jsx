import styled from "styled-components";

export const Container = styled.div`
  width: 18.75rem;
  height: 29.6875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const SplashContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const SplashImageContainer = styled.div`
  width: 16.25rem;
  height: 22.5rem;
`;

export const NavContainer = styled.div`
  align-items: center;
  background-color: rgb(0, 0, 0);
  display: flex;
  height: 4.6875rem;
  justify-content: space-around;
  padding: 1.5rem;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const MainContainer = styled.div`
  height: 100%;
  min-width: 18.75rem;
`;

export const ToolBarContainer = styled.div`
  height: 4rem;
  width: 100%;
  margin-top: 6.25rem;
  margin-bottom: 1.125rem;
`;

export const InfoWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  justify-content: space-around;

  div {
    margin: 1.7rem;
    max-width: 800px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex: 1 2 800px;
  flex-wrap: row wrap;
  border: double 10px white;
  height: max-content;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.h2`
  text-align: center;
  background-color: rgba(30, 20, 20, 0.8);
  font-weight: 800;
  color: rgb(255, 255, 255);
  word-spacing: 0.2em;
  line-height: 1.8em;
`;

export const MainInfoContainer = styled.div`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
`;
export const MediaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18.75rem;
  border-radius: 1rem;
  background-color: rgba(30, 20, 20, 0.8);

  iframe {
    width: 100%;
    height: 100%;
    border-radius: 2.5rem;
  }
`;
export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const DescriptionContainer = styled.div`
  box-shadow: 10px 10px 5px black;
  overflow-y: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
  background-color: rgba(30, 20, 20, 0.99);
  font-weight: 500;
  height: 23rem;
  text-shadow: 4px 6px black;

  p {
    margin: 0 1rem;
    font-size: 1.4em;
    color: rgb(255, 255, 255);
    word-spacing: 0.2em;
    line-height: 1.8em;
  }
`;

export const LinksContainer = styled.div`
  background-color: rgba(30, 20, 20, 0.9);
  color: white;

  ul {
    display: flex;
    align-items: center;
    overflow-x: scroll;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  li {
    margin-left: 1.5rem;
    font-weight: 700;
  }
`;
