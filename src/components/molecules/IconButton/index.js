import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledIcon, StyledButton, Text, Wrapper,
} from './style';

const IconButton = ({ icon, children, ...props }) => {
  const {
    breakpoint, right, responsive, height,
  } = props;
  const iconElement = <StyledIcon height={height ? height / 2.5 : undefined} icon={icon} />;
  return (
    <StyledButton hasText={!!children} {...props}>
      <Wrapper>
        { right || iconElement }
        { children
        && (
        <Text className="text" responsive={responsive} breakpoint={breakpoint}>
          { children }
        </Text>
        )
        }
        { right && iconElement }
      </Wrapper>
    </StyledButton>
  );
};

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  responsive: PropTypes.bool,
  breakpoint: PropTypes.number,
  collapsed: PropTypes.bool,
  right: PropTypes.bool,
  height: PropTypes.number,
  children: PropTypes.node,
};

IconButton.defaultProps = {
  breakpoint: 420,
};

export default IconButton;
