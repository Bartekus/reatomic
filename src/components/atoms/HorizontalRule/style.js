import styled from 'styled-components';
import { palette } from 'styled-theme';

export const HorizontalRule = styled.hr`
  border: 1px solid ${palette(1, true)};
  border-width: 0 0 1px;
  width: 100%;
`;
