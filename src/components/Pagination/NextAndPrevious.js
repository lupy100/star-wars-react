import React, { Component } from 'react';
import axios from 'axios';
import Button from '../Button/Button';

class NextAndPrevious extends Component {
  goTo(next, previous) {
    const { updateData } = this.props;
    if (next !== null && previous !== null) {
      return axios.get(next, previous)
        .then((response) => {
          updateData(response.data)
        });
    }
    console.log("Erro pagina nao encontrada")
  }
  render() {
    const { next, previous } = this.props;

    return (
      <div className="NextAndPrevious">
        <Button onClick={() => this.goTo(previous)}>Anterior</Button>
        <Button onClick={() => this.goTo(next)}>Proximo</Button>
      </div>    
    );
  }
}

export default NextAndPrevious;