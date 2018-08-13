import styled from 'styled-components';
import { palette } from 'styled-theme';

import { Paragraph } from 'components';

export const Wrapper = styled.div`
  background-color: ${palette('grayscale', 1, true)};
  padding: 2rem;
`;

export const Credits = styled(Paragraph)`
  vertical-align: center;
  text-align: center;
  margin: 0;
`;
