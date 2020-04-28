import React from 'react'
import {Link} from 'react-router-dom'
import {NavContainer} from '../styles/containers'
import {NavLink} from '../styles/text'

const Navigation = props => (
    <NavContainer>
      <NavLink to="/" id="nav-home">
        Home 
      </NavLink>
      <NavLink to="/games" id="nav-games">
        Games
      </NavLink>
      <NavLink to="/anime" id="nav-anime">
        Anime
      </NavLink>
    </NavContainer>
  )


export default Navigation