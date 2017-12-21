import React, { Component } from 'react';
import BotaoGol from './BotaoGol'

class Partida extends Component {
    render() {
        return (
            <div id='containerPartida'>
                <span id='estadio'>{this.props.estadio}</span>
                <div id='infos'>
                    <span>{this.props.data}</span>
                    <span> - </span>
                    <span>{this.props.horario}</span>
                </div>
                <BotaoGol marcarGol={this.props.marcarGol} label='Zerar' />
            </div>
        );
    }
}
export default Partida;
