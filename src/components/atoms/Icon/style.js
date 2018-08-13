import styled from 'styled-components';
import { palette } from 'styled-theme';
import { ifProp } from 'styled-tools';

const fontSize = ({ width, height }) => {
  const size = width || height;
  return size ? `${size / 16}rem` : '1.25em';
};

export const Wrapper = styled.span`
  display: inline-block;
  font-size: ${fontSize};
  color: ${ifProp('palette', palette({ grayscale: 0 }, 1), 'currentcolor')};
  width: 1em;
  height: 1em;
  margin: 0.1em;
  box-sizing: border-box;

  & > svg {
    width: 100%;
    height: 100%;
    fill: currentcolor;
    stroke: currentcolor;
  }
`;
