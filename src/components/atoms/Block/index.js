import PropTypes from 'prop-types';

import { Block } from './style';

Block.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  opaque: PropTypes.bool,
};

Block.defaultProps = {
  palette: 'grayscale',
};

export default Block;
