import React from "react";
import { SplashButton } from "../styles/buttons";
import { SplashContainer, Container, SplashImageContainer } from "../styles/containers";
import {Link} from "react-router-dom"

export default function splashPage() {
  return (
    <SplashContainer>
    <Container>
      <Link to="/anime" id="nav-anime">
        <SplashButton>
          <span>Anime</span>
        </SplashButton>
      </Link>
      <SplashImageContainer>
        {/* Insert image */}
      </SplashImageContainer>
    </Container>
    <Container>
      <SplashImageContainer style={{marginTop: "57.5px"}}>
        {/* Insert VS Image? */}
      </SplashImageContainer>
    </Container>
    <Container>
      <Link to="/games" id="nav-games">
        <SplashButton>
          <span>Games</span>
        </SplashButton>
      </Link>
      <SplashImageContainer>
        {/* Insert image */}
      </SplashImageContainer>
    </Container>
    </SplashContainer>
  );
}
