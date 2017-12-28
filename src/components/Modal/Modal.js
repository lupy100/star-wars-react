import React, { Component } from 'react';

import Button from "../Button";

import './styles/Modal.scss';

class Modal extends Component {
  render(props) {
    const { openModal } = this.props;
    const classNames = `ContainerModal ${openModal ? '--active' : ''}`;
    return (
      <div className={classNames}>
        <div className="live-editor">
          <Button
            className="ContainerModal--closeModal"
            onClick={this.props.onCancel}
          >
            X
        </Button>
          <div className="testee">

            {this.props.children}
           
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
