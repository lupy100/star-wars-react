import React from 'react';
import './styles/Button.scss'

function Button(props) {
  const { children, className, ...otherProps } = props;
  const classes = `Button ${className}`;

  return (
    <button {...otherProps} className={classes}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  className: '',
}

export default Button;