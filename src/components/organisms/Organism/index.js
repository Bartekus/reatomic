import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './style';

const Organism = (props) => {
  return (
    <Wrapper {...props}>
content
    </Wrapper>
  );
};

Organism.propTypes = {
  reverse: PropTypes.bool,
};

export default Organism;
