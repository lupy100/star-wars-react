import React, { Component } from 'react';
import './Button.css'

class Button extends Component {
  state = {

  }

  render() {
    return (
      <input
        className={this.state.clicado ? 'ativo' : 'desativo'}
        type="button"
        value={this.props.label}
        onClick={
          () => {
            this.setState((state) => ({
              clicado: !state.clicado
            }))

            /* this.setState((state) => {
              return {
                clicado:!state.clicado
              }
            }) */
            console.log(this.state)
          }
        }
      />
    )
  }
}

// function () {
//             console.log(this)
//           }

Button.defaultProps = {
  label: 'e nois que nao voa'
}

export default Button;