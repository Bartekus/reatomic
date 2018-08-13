import React from 'react';

import { IconLink } from 'components';
import { UserButton } from 'containers';
import { InnerWrapper, StyledPrimaryNavigation, Wrapper } from './style';

const Header = (props) => {
  return (
    <Wrapper opaque reverse {...props}>
      <InnerWrapper>
        <IconLink to="/" icon="reatomic" height={100} />
        <StyledPrimaryNavigation reverse />
        <UserButton reverse transparent />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Header;
