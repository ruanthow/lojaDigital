import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Home } from './pages/Home';
import {Introduction} from './pages/Introduction'
import { Store } from './pages/Store';
import {ProductSelect} from './pages/ProductSelect';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Introduction} />
        <Route path="/home" component={Home} />
        <Route path="/store" component={Store} />
        <Route path="/productSelect" component={ProductSelect}/>
      </Switch>
    </Router>
    
  );
}

export default App;
