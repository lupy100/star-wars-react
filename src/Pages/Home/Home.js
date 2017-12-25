import React, { Component } from 'react';
import LogoStarWars from '../../components/Logo/LogoStarWars';
import './styles/Home.scss'
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <LogoStarWars/>
        </div>
        <div className="Home-body">
          <h1 className="Home-body-title">Personagens</h1>
          <h1 className="Home-body-title">Planetas</h1>
        </div>
      </div>
    );
  }
}

export default Home;
