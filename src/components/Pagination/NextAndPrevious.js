import React, { Component } from "react";
import axios from "axios";
import Button from "../Button";
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
          <Button onClick={() => this.goTo(previous)}>Previous</Button>
        ) : (
            <Button className="disable" disabled="disabled">Previous</Button>
          )}

        {/* Validação Botão Proximo */}
        {next !== null ? (
          <Button onClick={() => this.goTo(next)}>Next</Button>
        ) : (
            <Button className="disable" disabled="disabled">Next</Button>
          )}
      </div>
    );
  }
}

export default NextAndPrevious;
