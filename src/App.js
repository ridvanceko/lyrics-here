import React from 'react';

import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Index from './components/layouts/Index'


function App() {
  return (
    <Router>
    <div className="App">
            <Navbar/>
    </div>
    <div className="container">
      <Switch>
        <Route exact path="/" component={index}/>
      </Switch>

    </div>
    </Router>
  );
}

export default App;
