import React from "react";
import { SplashButton } from "../styles/buttons";
import { SplashContainer, Container, SplashImageContainer } from "../styles/containers";

export default function splashPage() {
  return (
    <SplashContainer>
    <Container>
      <SplashButton>
        <span>Animes</span>
      </SplashButton>
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
      <SplashButton>
        <span>Games</span>
      </SplashButton>

      <SplashImageContainer>
        {/* Insert image */}
      </SplashImageContainer>
    </Container>
    </SplashContainer>
  );
}
