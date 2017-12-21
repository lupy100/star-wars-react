import React, { Component } from 'react';

import BotaoGol from './BotaoGol'
//PEga a informacao e coloca na tela e repassa o metodo que ensina marcar gol
class Time extends Component{
    render(){
        return(
            <div id='containerTime'> 
                <h1>{this.props.nome}</h1>
                <h2>{this.props.gols}</h2>
                <BotaoGol marcarGol={this.props.marcarGol}/>
            </div>
        );
    }
}

export default Time;
