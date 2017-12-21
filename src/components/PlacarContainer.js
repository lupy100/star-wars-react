import React, { Component } from 'react';

import Time from './Time';
import Partida from './Partida';

class PlacarContainer extends Component {
    //2 estados
    state = {
        gols_casa: 0,
        gols_visitante: 0,
    }

    //metodo que marca gol com time casa
    marcarGolCasa() {
        this.setState({
            gols_casa: this.state.gols_casa + 1,
        })
    }

    //metodo que marca gol com time visitante
    marcarGolVisitante() {
        this.setState({
            gols_visitante: this.state.gols_visitante + 1,
        })
    }
    //metodo que zera os gols
    zerarGols() {
        this.setState({
            gols_visitante: this.state.gols_visitante = 0,
            gols_casa: this.state.gols_casa = 0,
        })
    }
    //Repassando as propriedades para outros Component
    render() {
        const { partida, casa, visitante } = this.props
        const estilo = { float: "left", "marginRight": "60px" };
        return (
            <main>
                <div >
                    <div style={estilo}>
                        <h3>Casa</h3>
                        <Time nome={casa.nome}
                            gols={this.state.gols_casa}
                            marcarGol={this.marcarGolCasa.bind(this)} />
                    </div>
                    <div style={estilo}>
                        <Partida {...partida}
                            marcarGol={this.zerarGols.bind(this)} />
                    </div>
                    <div style={estilo}>
                        <h3>Visitante</h3>
                        <Time nome={visitante.nome}
                            gols={this.state.gols_visitante}
                            marcarGol={this.marcarGolVisitante.bind(this)} />
                    </div>
                    <div style={{ clear: "both" }}></div>
                </div>
            </main>
        );
    }
}


export default PlacarContainer;

/* Antes de refatorar

render() {   
        return (
            <div>
                <div style={{ float: "left", "marginRight": "20px" }}>
                    <h3>Casa</h3>
                    <Time nome={this.props.casa.nome} 
                          gols={this.state.gols_casa} 
                          marcarGol={this.marcarGolCasa.bind(this)}/>
                </div>
                <div style={{ float: "left", "marginRight": "20px" }}>
                    <Partida estadio={this.props.partida.estadio}
                             data={this.props.partida.data}
                             horario={this.props.partida.horario} />
                </div>
                <div style={{ float: "left", "marginRight": "20px" }}>
                    <h3>Visitante</h3>
                    <Time nome={this.props.visitante.nome}
                          gols={this.state.gols_visitante} 
                          marcarGol={this.marcarGolVisitante.bind(this)}/>
                </div>
                <div style={{ clear: "both" }}></div>
            </div>
        );
    }
*/