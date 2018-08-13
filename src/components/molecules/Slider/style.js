import styled from 'styled-components';
import { font, palette } from 'styled-theme';
import { ifProp, prop } from 'styled-tools';

const fontSize = ({ height }) => `${height / 35.5555555556}rem`;

const thumbColor = ({ disabled }) => palette(disabled ? 2 : 1);

const barColor = palette('grayscale', 2, true);

const hoverThumbColor = ({ disabled }) => !disabled && palette(0);

const thumbHeight = '1.5em';
const thumbWidth = '1.5em';
const barHeight = '0.6em';

const border = '0.0625em solid transparent';
const borderRadius = '0.125em';

export const Wrapper = styled.div`
  font-family: ${font('primary')};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: ${fontSize};
  color: ${palette('grayscale', 0)};
  background-color: transparent;
`;

export const Range = styled.input`
  -webkit-appearance: none;
  margin: 0 0.4375em;
  width: 100%;
  height: 1rem;
  background: transparent;

  &:focus {
    outline: none;
  }

  ${''/* Thumb */}

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: ${thumbColor};
    border: ${border};
    height: ${thumbHeight};
    width: ${thumbWidth};
    border-radius: ${borderRadius};
    cursor: pointer;
    margin-top: -0.53em;
    transition: background .15s ease-in-out;
    &:hover {
      background: ${hoverThumbColor};
    }
  }

  &::-moz-range-thumb {
    background: ${thumbColor};
    height: ${thumbHeight};
    width: ${thumbWidth};
    border: ${border};
    border-radius: ${borderRadius};
    cursor: pointer;
    transition: background .15s ease-in-out;
    &:hover {
      background: ${hoverThumbColor};
    }
  }

  &::-ms-thumb {
    height: ${thumbHeight};
    width: ${thumbWidth};
    cursor: pointer;
    border: ${border};
    border-radius: ${borderRadius};
  }

  ${''/* Track */}

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: ${barHeight};
    background: ${barColor};
    border-radius: ${borderRadius};
    border: ${border};
  }

  &::-ms-track {
    width: 100%;
    height: ${barHeight};
    border: ${border};
    border-radius: ${borderRadius};
    color: transparent;
  }

  &::-moz-range-track {
    width: 100%;
    height: ${barHeight};
    background: ${barColor};
    border-radius: ${borderRadius};
    border: ${border};
  }

  &::-ms-fill-lower {
    background: ${barColor};
    border: ${border};
    border-radius: ${borderRadius};
  }

  &::-ms-fill-upper {
    background: ${barColor};
    border: ${border};
    border-radius: ${borderRadius}
  }
`;

export const Text = styled.span`
  padding: 0.4375em;
  @media screen and (max-width: ${prop('breakpoint')}px) {
    display: ${ifProp('responsive', 'none !important')};
  }
`;
