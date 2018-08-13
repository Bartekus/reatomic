import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput, StyledSelect, StyledTextarea } from './style';

const Input = ({ ...props }) => {
  const { type } = props;

  if (type === 'textarea') {
    return <StyledTextarea {...props} />;
  }

  if (type === 'select') {
    return <StyledSelect {...props} />;
  }

  return <StyledInput {...props} />;
};

Input.propTypes = {
  type: PropTypes.string,
  reverse: PropTypes.bool,
  height: PropTypes.number,
  invalid: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  height: 40,
};

export default Input;
