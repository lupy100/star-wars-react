import React, { Component } from "react";
import axios from "axios";
import Button from "../Button/Button";
import "./styles/NextAndPrevious.scss";

class NextAndPrevious extends Component {
  goTo(next, previous) {
    const { updateData } = this.props;
    if (next !== null && previous !== null) {
      return axios.get(next, previous).then(response => {
        updateData(response.data);
      });
    }
    console.log("Erro pagina nao encontrada");
  }
  render() {
    const { next, previous } = this.props;
    return (
      <div className="NextAndPrevious">
        {/* Validação Botão Anterior */}
        {previous !== null ? (
          <Button onClick={() => this.goTo(previous)}>Anterior</Button>
        ) : (
            <Button className="disable" disabled="disabled">Anterior</Button>
          )}

        {/* Validação Botão Proximo */}
        {next !== null ? (
          <Button onClick={() => this.goTo(next)}>Proximo</Button>
        ) : (
            <Button className="disable" disabled="disabled">Proximo</Button>
          )}
      </div>
    );
  }
}

export default NextAndPrevious;
