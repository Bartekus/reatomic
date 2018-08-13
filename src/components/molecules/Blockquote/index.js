import React from 'react';
import PropTypes from 'prop-types';

import { Cite, StyledBlockquote } from './style';

const Blockquote = ({ cite, children, ...props }) => {
  return (
    <StyledBlockquote {...props}>
      <div>
        { children }
      </div>
      { cite && (
      <Cite>
        { cite }
      </Cite>
      ) }
    </StyledBlockquote>
  );
};

Blockquote.propTypes = {
  cite: PropTypes.string,
  children: PropTypes.node,
  reverse: PropTypes.bool,
};

export default Blockquote;
