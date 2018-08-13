import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'components';
import { Nav } from './style';

const PrimaryNavigation = (props) => {
  return (
    <Nav {...props}>
      <li>
        <Link to="/" exact activeClassName="active">
Home
        </Link>
      </li>
      <li>
        <Link to="/sample-page" activeClassName="active">
Sample page
        </Link>
      </li>
    </Nav>
  );
};

PrimaryNavigation.propTypes = {
  reverse: PropTypes.bool,
};

export default PrimaryNavigation;
