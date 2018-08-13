import styled from 'styled-components';
import { font, palette } from 'styled-theme';

export const Caption = styled.caption`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 1)};
  font-weight: 500;
  line-height: 2rem;
  font-size: 0.875rem;
  text-transform: uppercase;
`;
