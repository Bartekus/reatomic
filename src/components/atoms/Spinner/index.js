import PropTypes from 'prop-types';

import { Spinner } from './style';

Spinner.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
};

Spinner.defaultProps = {
  palette: 'primary',
};

export default Spinner;
