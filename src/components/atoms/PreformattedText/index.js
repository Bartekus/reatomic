import PropTypes from 'prop-types';

import { PreformattedText } from './style';

PreformattedText.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  block: PropTypes.bool,
  wrapped: PropTypes.bool,
};

PreformattedText.defaultProps = {
  palette: 'grayscale',
};

export default PreformattedText;
