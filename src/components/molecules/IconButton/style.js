import styled, { css, keyframes } from 'styled-components';
import { ifProp, prop } from 'styled-tools';

import { Icon, Button } from 'components';

const fadeIn = keyframes`
  0% { display: none; opacity: 0; }
  1% { display: block; opacity: 0; }
  100% { display: block; opacity: 1; }
`;

export const StyledButton = styled(Button)`
  max-width: ${(props) => {
    const { collapsed, hasText } = props;
    return hasText && !collapsed ? '100%' : '2.5em';
  }}; 
  width: ${ifProp('hasText', 'auto', '2.5em')};
  padding: ${ifProp('hasText', '0 0.4375em', 0)};
  flex: 0 0 2.5em;
  box-sizing: border-box;
  ${ifProp('collapsed', css`
    overflow: hidden;
    transition: max-width 250ms ease-in-out;
    will-change: max-width;
    & .text {
      display: none;
    }
    &:hover {
      max-width: 100%;
      & .text {
        display: block;
        animation: ${fadeIn} 250ms;
      }
    }
  `)}
  ${ifProp('responsive', css`
    @media screen and (max-width: ${prop('breakpoint')}px) {
      width: auto;
      flex: 0 !important;
    }
  `)}
`;

export const Text = styled.span`
  padding: 0.4375em;
  @media screen and (max-width: ${prop('breakpoint')}px) {
    display: ${ifProp('responsive', 'none !important')};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const StyledIcon = styled(Icon)`
  flex: none;
`;
