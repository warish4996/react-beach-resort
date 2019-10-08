import React from 'react'
import Home from './Pages/Home'
import Rooms from './Pages/Rooms'
import SingleRoom from './Pages/SingleRoom'
import Error from './Pages/Error'
import { Route,Switch } from 'react-router-dom'
import Navbar from './Component/Navigation'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Switch>
      <Route exact path="/"  component={Home}/>
      <Route exact path="/rooms/" component={Rooms}/>
      <Route exact path="/rooms/:slug" component={SingleRoom}/>
      <Route component={Error}/>
      </Switch>
    </div>
  )
}

export default App
