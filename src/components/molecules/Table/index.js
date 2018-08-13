import React from 'react';
import PropTypes from 'prop-types';

import { Caption } from 'components';
import { StyledTable } from './style';

const Table = ({
  caption, head, foot, children, ...props
}) => {
  const { reverse } = props;

  return (
    <StyledTable {...props}>
      { caption && (
      <Caption reverse={reverse}>
        { caption }
      </Caption>
      ) }
      { head && (
      <thead>
        { head }
      </thead>
      ) }
      { foot && (
      <tfoot>
        { foot }
      </tfoot>
      ) }
      <tbody>
        { children }
      </tbody>
    </StyledTable>
  );
};

Table.propTypes = {
  caption: PropTypes.string,
  head: PropTypes.node,
  foot: PropTypes.node,
  children: PropTypes.any,
  reverse: PropTypes.bool,
};

export default Table;
