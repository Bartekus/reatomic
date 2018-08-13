import styled from 'styled-components';
import { font, palette } from 'styled-theme';

export const Atom = styled.span`
  font-family: ${font('primary')};
  color: ${palette({ grayscale: 0 }, 1)};
`;
