import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import People from './components/People';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Route path="/people" exact component={People} />
          {/* <Route path="/people/:peopleId" exact component={People} /> */}

        </div>
      </Router>

    );
  }
}

export default App;
