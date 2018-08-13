import styled, { css } from 'styled-components';
import { font, palette } from 'styled-theme';

const styles = css`
  font-family: ${font('primary')};
  margin: 1rem 0;
  padding-left: 1.6rem;
  line-height: 1.7rem;
  color: ${palette({ grayscale: 0 }, 1)};
`;

export const Ol = styled.ol`${styles}`;
export const Ul = styled.ul`${styles}`;
