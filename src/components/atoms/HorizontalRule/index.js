import PropTypes from 'prop-types';

import { HorizontalRule } from './style';

HorizontalRule.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
};

HorizontalRule.defaultProps = {
  palette: 'grayscale',
};

export default HorizontalRule;
