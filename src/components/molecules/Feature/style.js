import styled from 'styled-components';
import { ifProp } from 'styled-tools';

import { Icon, Badge } from 'components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 1rem;
  box-sizing: border-box;
  opacity: ${ifProp('soon', 0.4, 1)};
  @media screen and (max-width: 640px) {
    padding: 0.5rem;
  }
`;

export const StyledIcon = styled(Icon)`
  flex: none;
  @media screen and (max-width: 640px) {
    width: 32px;
  }
`;

export const Text = styled.div`
  margin-left: 1rem;
  overflow: auto;
  > :first-child {
    margin: 0;
  }
`;

export const StyledBadge = styled(Badge)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  @media screen and (max-width: 640px) {
    top: 0.5rem;
    right: 0.5rem;
  }
`;
