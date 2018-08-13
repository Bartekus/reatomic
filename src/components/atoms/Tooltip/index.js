import PropTypes from 'prop-types';

import { Tooltip } from './style';

Tooltip.propTypes = {
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  align: PropTypes.oneOf(['start', 'center', 'end']),
  reverse: PropTypes.bool,
  'data-title': PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

Tooltip.defaultProps = {
  position: 'top',
  align: 'center',
  tabIndex: 0,
};

export default Tooltip;
