import React from 'react';
import PropTypes from 'prop-types';

import {
  Content, Footer, Header, Hero, Sponsor, Wrapper,
} from './style';

const PageTemplate = ({
  header, hero, sponsor, children, footer, ...props
}) => {
  return (
    <Wrapper {...props}>
      <Header>
        { header }
      </Header>
      { hero && (
      <Hero>
        { hero }
      </Hero>
      ) }
      { sponsor && (
      <Sponsor>
        { sponsor }
      </Sponsor>
      ) }
      { children && (
      <Content>
        { children }
      </Content>
      ) }
      <Footer>
        { footer }
      </Footer>
    </Wrapper>
  );
};

PageTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  hero: PropTypes.node,
  sponsor: PropTypes.node,
  footer: PropTypes.node.isRequired,
  children: PropTypes.any,
};

export default PageTemplate;
