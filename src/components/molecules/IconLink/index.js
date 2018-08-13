import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'components';
import { StyledIcon, Text } from './style';

const IconLink = ({
  height, icon, right, responsive, children, ...props
}) => {
  const { palette, reverse } = props;
  const iconElement = (
    <StyledIcon
      height={height}
      icon={icon}
      hasText={!!children}
      right={right}
      responsive={responsive}
      palette={palette}
      reverse={reverse}
    />
  );
  return (
    <Link {...props}>
      { right || iconElement }
      <Text responsive={responsive}>
        { children }
      </Text>
      { right && iconElement }
    </Link>
  );
};

IconLink.propTypes = {
  icon: PropTypes.string.isRequired,
  height: PropTypes.number,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  responsive: PropTypes.bool,
  right: PropTypes.bool,
  children: PropTypes.node,
};

export default IconLink;
