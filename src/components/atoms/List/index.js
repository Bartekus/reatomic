import React from 'react';
import PropTypes from 'prop-types';

import { Ol, Ul } from './style';

const List = ({ ordered, children, ...props }) => {
  return React.createElement(ordered ? Ol : Ul, props, children);
};

List.propTypes = {
  ordered: PropTypes.bool,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  children: PropTypes.any,
};

List.defaultProps = {
  palette: 'grayscale',
};

export default List;
