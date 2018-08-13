import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Range, Text } from './style';

const Slider = ({
  id, min, max, defaultValue, step, ...props
}) => {
  const { breakpoint, responsive } = props;
  return (
    <Wrapper {...props}>
      <Text responsive={responsive} breakpoint={breakpoint}>
        { min }
      </Text>
      <Range id={id} min={min} max={max} defaultValue={defaultValue} step={step} {...props} />
      <Text responsive={responsive} breakpoint={breakpoint}>
        { max }
      </Text>
    </Wrapper>
  );
};

Slider.propTypes = {
  id: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  defaultValue: PropTypes.number,
  step: PropTypes.number,
  reverse: PropTypes.bool,
  disabled: PropTypes.bool,
  responsive: PropTypes.bool,
  breakpoint: PropTypes.number,
};

Slider.defaultProps = {
  min: 0,
  max: 2,
  defaultValue: 1,
  step: 1,
  palette: 'primary',
  type: 'range',
  breakpoint: 420,
  responsive: false,
};

export default Slider;
