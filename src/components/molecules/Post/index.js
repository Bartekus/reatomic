import React from 'react';
import PropTypes from 'prop-types';

import { Heading, Paragraph } from 'components';
import { Article } from './style';

const Post = ({ title, body, ...props }) => {
  return (
    <Article {...props}>
      <Heading level={2}>
        { title }
      </Heading>
      <Paragraph>
        { body }
      </Paragraph>
    </Article>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
