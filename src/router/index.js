import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import SplashPage from "../containers/SplashPage"
import GamesPage from "../containers/GamesPage"
import AnimePage from "../containers/AnimePage"

const AppRouter = () => (
  <Router>
    <Route 
      path="/" 
      component={SplashPage} 
      exact />
    <Route
      path="/games"
      component={GamesPage}
      exact />
    <Route
      path="/anime"
      component={AnimePage}
      exact />
  </Router>
)

export default AppRouter