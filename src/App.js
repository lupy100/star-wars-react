import React, { Component } from 'react';
import './css/Partida.css';

import PlacarContainer from './components/PlacarContainer';
//Comeca aki os dados estao sendo passado no style do json 
let dados = {
  partida: {
    estadio: "Maracanã/RJ",
    data: "20/08/2017",
    horario: "19h",
  },
  casa: {
    nome: "Vasco",
  },
  visitante: {
    nome: "Flamengo",
  }
};

class App extends Component {
  render() {
    //passando DADOS como propriedades (partida={dados.partida} casa={dados.casa} visitante={dados.visitante})
    return <PlacarContainer {...dados}/>;
  }
}


export default App;
