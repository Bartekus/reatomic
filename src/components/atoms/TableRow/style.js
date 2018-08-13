import styled from 'styled-components';
import { palette } from 'styled-theme';

const backgroundColor = ({ filled }) => palette('grayscale', filled ? 1 : 0, true);

export const TableRow = styled.tr`
  background-color: ${backgroundColor};
`;
