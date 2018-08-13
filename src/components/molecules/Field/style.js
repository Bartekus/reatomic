import styled from 'styled-components';

import { Block } from 'components';

export const Error = styled(Block)`
  margin: 0.5rem 0 0;
`;

export const Wrapper = styled.div`
  margin-bottom: 1rem;
  input[type="checkbox"],
  input[type="radio"] {
    margin-right: 0.5rem;
  }
  label {
    vertical-align: middle;
  }
`;
