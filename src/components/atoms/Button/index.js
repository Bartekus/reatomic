import React from 'react';
import PropTypes from 'prop-types';

import { Anchor, StyledButton, StyledLink } from './style';

const Button = ({ type, ...props }) => {
  const { to, href } = props;

  if (to) {
    return <StyledLink {...props} />;
  } if (href) {
    return <Anchor {...props} />;
  }
  return <StyledButton {...props} type={type} />;
};

Button.propTypes = {
  disabled: PropTypes.bool,
  palette: PropTypes.string,
  transparent: PropTypes.bool,
  reverse: PropTypes.bool,
  height: PropTypes.number,
  type: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
};

Button.defaultProps = {
  palette: 'primary',
  type: 'button',
  height: 40,
};

export default Button;
