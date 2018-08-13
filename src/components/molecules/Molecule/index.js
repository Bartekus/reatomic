import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './style';

const Molecule = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      { children }
    </Wrapper>
  );
};

Molecule.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
};

export default Molecule;
