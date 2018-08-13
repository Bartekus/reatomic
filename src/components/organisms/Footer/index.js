import React from 'react';

import { Link, Icon } from 'components';
import { Credits, Wrapper } from './style';

const Footer = (props) => {
  return (
    <Wrapper {...props}>
      <Credits>
        {'Made with'}
        {' '}
        <Icon icon="heart" />
        {' '}
        {'by'}
        {' '}
        <Link href="https://github.com/blockchainfoundryinc">
          {'Blockchain Foundry Inc.'}
        </Link>
      </Credits>
    </Wrapper>
  );
};

export default Footer;
