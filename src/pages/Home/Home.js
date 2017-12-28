import React, { Component } from 'react';
import LogoStarWars from '../../components/Logo';
import './styles/Home.scss'
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <LogoStarWars/>
        </div>
        <div className="Home-body">
          <h1 className="Home-body-title">Characters</h1>
          <h1 className="Home-body-title">Planets</h1>
        </div>
      </div>
    );
  }
}

export default Home;
