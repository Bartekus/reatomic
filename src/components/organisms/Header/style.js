import styled from 'styled-components';
import { size } from 'styled-theme';

import { PrimaryNavigation, Block } from 'components';

export const Wrapper = styled(Block)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  @media screen and (max-width: 640px) {
    padding: 0.5rem;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${size('maxWidth')};
  > :not(:first-child) {
    margin-left: 1rem;
  }
`;

export const StyledPrimaryNavigation = styled(PrimaryNavigation)`
  flex: 1
`;
