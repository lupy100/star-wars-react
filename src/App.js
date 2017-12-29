import React, { Component } from 'react';
import EasterEgg from 'react-easter-egg';
import { BrowserRouter as Router, Route, Redirect,Switch } from 'react-router-dom';
import People from './components/People';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Planet from './components/Planet';
import NotFound from './pages/NotFound';

class App extends Component {

  render() {

    return (

      <Router>
        <div className="App">
          <EasterEgg className="imperialMarch">
            <iframe title="march" width="0" height="0" src="https://www.youtube.com/embed/5gTtv82b9ck?autoplay=1&controls=0&loop=1&rel=0&showinfo=0" frameborder="0" allowfullscreen />
          </EasterEgg>
          <Navbar />
          <Switch>
          <Route path="/" exact component={Home} />
            <Route path="/people" exact component={People} />
            <Route path="/planet" exact component={Planet} />

            <Route path='/404' component={NotFound} />
            <Redirect from='*' to='/404' />
          </Switch>

        </div>
      </Router>

    );
  }
}

export default App;
