import styled from 'styled-components';

import { Icon } from 'components';

const fontSize = ({ height }) => height ? `${height / 3 / 16}rem` : '0.75em';

const margin = ({ hasText, right }) => {
  if (hasText) {
    return right ? '0 0 0 0.25em' : '0 0.25em 0 0';
  }
  return 0;
};

export const StyledIcon = styled(Icon)`
  font-size: ${fontSize};
  margin: ${margin};
  @media screen and (max-width: 420px) {
    margin: ${({ responsive }) => responsive && 0};
  }
`;

export const Text = styled.span`
  @media screen and (max-width: 420px) {
    display: ${({ responsive }) => responsive && 'none'};
  }
`;
