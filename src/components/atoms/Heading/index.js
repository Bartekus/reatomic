import PropTypes from 'prop-types';

import { Heading } from './style';

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
};

Heading.defaultProps = {
  level: 1,
  palette: 'grayscale',
};

export default Heading;
