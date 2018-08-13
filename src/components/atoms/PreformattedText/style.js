import styled from 'styled-components';
import { font, palette } from 'styled-theme';
import { ifProp } from 'styled-tools';

export const PreformattedText = styled.pre`
  display: ${ifProp('block', 'block', 'inline')};
  font-family: ${font('pre')};
  color: ${palette({ grayscale: 0 }, 1)};
  background-color: ${palette('grayscale', 1, true)};
  padding: ${ifProp('block', '1em', '0 0.5em')};
  white-space: ${ifProp('wrapped', 'pre-wrap', 'nowrap')};
  overflow: auto;
  line-height: 150%;
`;
