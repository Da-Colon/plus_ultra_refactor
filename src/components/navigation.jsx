import React from "react";
import { Link } from "react-router-dom";

const Navigation = (props) => (
  <div className="nav">
    {props.navLabelTwo ? (
      <Link className="nav-link" to={props.navTwo} id={props.navTwo}>
        {props.navLabelTwo}
      </Link>
    ) : (
      <Link className="nav-link" to="/" id="/home">
        Home
      </Link>
    )}
    <h1>{props.pageTitle}</h1>
    <Link className="nav-link" to={props.nav} id={props.nav}>
      {props.navLabel}
    </Link>
  </div>
);

export default Navigation;
