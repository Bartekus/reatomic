import styled from 'styled-components';
import { font, palette } from 'styled-theme';

export const Badge = styled.span`
  font-family: ${font('primary')};
  font-size: 0.75rem;
  line-height: 1.5em;
  padding: 0.1em 0.3em;
  color: ${palette('grayscale', 0, true)};
  background-color: ${palette(1)};
  border-radius: 0.16667em;
`;
