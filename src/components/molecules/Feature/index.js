import React from 'react';
import PropTypes from 'prop-types';

import {
  Link, Paragraph, Heading, PreformattedText,
} from 'components';
import {
  StyledIcon, StyledBadge, Text, Wrapper,
} from './style';

const Feature = ({
  icon, title, link, code, children, ...props
}) => {
  const { soon } = props;

  return (
    <Wrapper {...props}>
      { icon && <StyledIcon icon={icon} width={64} /> }
      <Text>
        <Heading level={2}>
          { link ? (
            <Link href={link}>
              { title }
            </Link>
          ) : title }
        </Heading>
        <Paragraph>
          { children }
        </Paragraph>
        { code && (
        <PreformattedText block>
          { code }
        </PreformattedText>
        ) }
      </Text>
      { soon && (
      <StyledBadge palette="grayscale">
        {'soon'}
      </StyledBadge>
      ) }
    </Wrapper>
  );
};

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  link: PropTypes.string,
  soon: PropTypes.bool,
  children: PropTypes.any,
  code: PropTypes.node,
};

export default Feature;
