import React from 'react';

import { Link } from 'components';
import {
  Description, Grid, StyledFeature, StyledHeading,
} from './style';

const FeatureList = ({ ...props }) => (
  <div {...props}>
    <StyledHeading>
The stack
    </StyledHeading>
    <Description>
      It includes everything necessary to build a browser extension with focus on productivity and developer experience.
      <br />
      <Link href="https://github.com/blockchainfoundryinc/reatomic/wiki/Workflow">
Learn more about the recomended workflow
      </Link>
    </Description>
    <Grid>
      <StyledFeature
        icon="react"
        link="https://facebook.github.io/react"
        title="React"
        code="<MyComponent attr='value' />"
      >
        The Facebook&apos;s JavaScript library for building user interfaces using components.
      </StyledFeature>
      <StyledFeature
        icon="react-router"
        link="https://github.com/ReactTraining/react-router"
        title="React Router"
        code="<Route path='/sample-page' />"
      >
        The most popular declarative routing library for React and React Native.
      </StyledFeature>
      <StyledFeature
        icon="webpack"
        link="https://webpack.github.io/"
        title="Webpack"
        code="npm run build"
      >
        The awesome module bundler with
        {' '}
        <Link href="https://webpack.github.io/docs/hot-module-replacement.html">
Hot Module Replacement
        </Link>
        {' '}
enabled.
      </StyledFeature>
      <StyledFeature
        icon="jest"
        link="https://facebook.github.io/jest"
        title="Jest"
        code="npm run test"
      >
        The great testing framework used by Facebook to test all their Javascript code.
      </StyledFeature>
      <StyledFeature
        icon="redux"
        link="https://redux.js.org/"
        title="Redux"
        code="{ type: 'ADD_TODO', text: 'Read the Redux docs.' }"
      >
        The predictable state container for JavaScript apps.
      </StyledFeature>
      <StyledFeature
        icon="styled-components"
        link="https://www.styled-components.com/"
        title="Styled Components"
        code="const Wrapper = styled.section`padding: 4em;`"
      >
        Visual primitives for the component age.
      </StyledFeature>
    </Grid>
  </div>
);

export default FeatureList;
