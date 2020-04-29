import React from 'react'
import {NavContainer} from '../styles/containers'
import {NavLink, PageTitle} from '../styles/text'

const Navigation = props => (
    <NavContainer>
      <NavLink to="/" id="nav-home">
        Home 
      </NavLink>
      <PageTitle>{props.pageTitle}</PageTitle>
      <NavLink to={props.nav} id="nav-games">
        {props.navLabel}
      </NavLink>
    </NavContainer>
  )


export default Navigation