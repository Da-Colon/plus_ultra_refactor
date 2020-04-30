import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = props => (
    <div className="nav">
      <Link className="nav-link" to="/" id="nav-home">
        Home 
      </Link>
      <h1>{props.pageTitle}</h1>
      <Link className="nav-link" to={props.nav} id="nav-games">
        {props.navLabel}
      </Link>
    </div>
  )


export default Navigation