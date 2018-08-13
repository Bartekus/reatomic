import React from 'react';
import PropTypes from 'prop-types';

import { Content, Wrapper } from './style';

const GenericTemplate = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Content>
        { children }
      </Content>
    </Wrapper>
  );
};

GenericTemplate.propTypes = {
  children: PropTypes.any.isRequired,
};

export default GenericTemplate;
