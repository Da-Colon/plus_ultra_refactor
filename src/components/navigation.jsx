import React from 'react'
import {Link} from 'react-router-dom'
import {NavContainer} from '../styles/containers'
import {SplashButton} from '../styles/buttons'


const Navigation = props => (
    <NavContainer>
      <Link to="/" id="nav-home">
        <SplashButton>
          <span>Home</span>
        </SplashButton>
      </Link>
      <Link to="/games" id="nav-games">
        <SplashButton>
          <span>Games</span>
        </SplashButton>
      </Link>
      <Link to="/anime" id="nav-anime">
        <SplashButton>
          <span>Anime</span>
        </SplashButton>
      </Link>
    </NavContainer>
  )


export default Navigation