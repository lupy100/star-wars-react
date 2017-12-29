import React, { Component } from 'react';
import Logo from '../../imagens/404.png';

class NotFound extends Component {
  render() {
    return (
      <div className="NotFound">
        <div className="NotFound-header">
          <div className="imgNotFound">
            <img src={Logo} alt="404" />
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
