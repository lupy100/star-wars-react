import React, { Component } from 'react';
import Button from "../Button";

import './styles/Modal.scss';

class Modal extends Component {
  render(props) {
    const { openModal } = this.props;
    const classNames = `ContainerModal ${openModal ? '--active' : ''}`;
    return (
      <div className={classNames}>
        <Button
          className="ContainerModal--closeModal"
          onClick={this.props.onCancel}
        >
          X
        </Button>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;
