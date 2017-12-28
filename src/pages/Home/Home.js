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
      </div>
    );
  }
}

export default Home;
