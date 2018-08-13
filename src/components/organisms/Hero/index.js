import React from 'react';

import {
  IconLink, IconButton, LogoImage, Tooltip,
} from 'components';
import {
  ButtonGroup, Description, InnerWrapper, Section, Text, Wrapper,
} from './style';

const Hero = (props) => {
  return (
    <Wrapper opaque reverse {...props}>
      <InnerWrapper>
        <Section>
          <LogoImage height={265} />
          <ButtonGroup>
            <Tooltip reverse data-title="Come and visit, we've got puppies and candy 😄">
              <IconButton icon="github" href="https://github.com/blockchainfoundryinc/reatomic">
                {'GitHub'}
              </IconButton>
            </Tooltip>
            <Tooltip reverse data-title="Perhaps soon enough there's going to be a wiki too" align="end" position="bottom">
              <IconButton icon="docs" href="https://github.com/blockchainfoundryinc/reatomic/wiki">
                {'Docs'}
              </IconButton>
            </Tooltip>
          </ButtonGroup>
        </Section>
        <Section>
          <Description>
            <Text>
              <strong>
                {'reatomic'}
              </strong>
              {' is a '}
              <IconLink reverse icon="react" href="https://facebook.github.io/react/">
                {'React'}
              </IconLink>
              {' + '}
              <IconLink reverse icon="redux" href="https://redux.js.org/">
                {'Redux'}
              </IconLink>
              {' general purpose/browser extension kit based on the '}
              <IconLink reverse icon="atomic-design" href="http://bradfrost.com/blog/post/atomic-web-design/">
                {'Atomic Design'}
              </IconLink>
              {' methodology.'}
            </Text>
          </Description>
        </Section>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Hero;
