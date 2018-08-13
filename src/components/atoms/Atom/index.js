import PropTypes from 'prop-types';

import { Atom } from './style';

Atom.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
};

Atom.defaultProps = {
  palette: 'grayscale',
};

export default Atom;
