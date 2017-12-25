import React, { Component } from 'react';
import EasterEgg from 'react-easter-egg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import People from './components/People';
import Home from './Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  
  render() {
    
    return (
      
      <Router>
        <div className="App">
          <EasterEgg className="imperialMarch">
            <iframe title="march"width="0" height="0" src="https://www.youtube.com/embed/5gTtv82b9ck?autoplay=1&controls=0&loop=1&rel=0&showinfo=0" frameborder="0" allowfullscreen />
          </EasterEgg>
          <Navbar/>
          <Route path="/" exact component={Home} />

          <Route path="/people" exact component={People} />
          {/* <Route path="/planet" exact component={Planet} /> */}

        </div>
      </Router>

    );
  }
}

export default App;
