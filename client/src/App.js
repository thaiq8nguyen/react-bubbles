import React, { useState } from "react"
import { Route } from "react-router-dom"
import { PrivateRoute } from './utilities/PrivateRoute'
import BubblePage from './components/BubblePage'

import Login from "./components/Login"
import "./styles.scss"

function App() {
  return (
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path ='/bubbles' component={BubblePage} />
      </div>
  )
}

export default App