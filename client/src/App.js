import React, { useState } from "react"
import { Route } from "react-router-dom"
import { PrivateRoute } from './components/ProtectedRoute'
import BubblePage from './components/BubblePage'

import Login from "./components/Login"
import "./styles.scss"

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute exact path ='/bubbles' component={BubblePage} />
      </div>
    </Router>
  )
}

export default App