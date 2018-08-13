import React from 'react';
import styled, { css } from 'styled-components';
import { font, palette } from 'styled-theme';

const fontSize = ({ level }) => `${0.75 + (1 * (1 / level))}rem`;

const styles = css`
  font-family: ${font('primary')};
  font-weight: 500;
  font-size: ${fontSize};
  margin: 0;
  margin-top: 0.85714em;
  margin-bottom: 0.57142em;
  color: ${palette({ grayscale: 0 }, 1)};
`;

export const Heading = styled(({
  level, children, reverse, palette, theme, ...props
}) => React.createElement(`h${level}`, props, children))`${styles}`;
