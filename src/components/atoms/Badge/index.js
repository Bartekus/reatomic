import PropTypes from 'prop-types';

import { Badge } from './style';

Badge.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
};

Badge.defaultProps = {
  palette: 'primary',
};

export default Badge;
