import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Home from './views/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Profile from './views/Profile'

function App () {
  return (
    <Router>
      <ChakraProvider>
      <NavigationBar/>
      <div className="content">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
    </ChakraProvider>
    </Router>
  )
}

export default App
