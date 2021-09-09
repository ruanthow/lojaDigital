import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Home } from './pages/Home';
import {Introduction} from './pages/Introduction'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Introduction} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
    
  );
}

export default App;
