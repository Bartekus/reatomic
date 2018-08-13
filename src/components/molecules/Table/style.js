import styled from 'styled-components';
import { font, palette } from 'styled-theme';

export const StyledTable = styled.table`
  font-family: ${font('primary')};
  border-collapse: collapse;
  width: 100%;
  border: 1px solid ${palette('grayscale', 1, true)};
  color: ${palette('grayscale', 0)};
`;
