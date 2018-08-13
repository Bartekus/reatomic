import React from 'react';
import PropTypes from 'prop-types';

import { Td, Th } from './style';

const TableCell = ({ heading, children, ...props }) => {
  return React.createElement(heading ? Th : Td, props, children);
};

TableCell.propTypes = {
  heading: PropTypes.bool,
  children: PropTypes.any,
};

export default TableCell;
