import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import { ReduxField, Heading, Button } from 'components';
import { Form } from './style';

const PostForm = ({ handleSubmit, submitting }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Heading level={2}>
Create a post
      </Heading>
      <Field name="title" label="Title" component={ReduxField} />
      <Field name="body" label="Body" type="textarea" component={ReduxField} />
      <Button type="submit" disabled={submitting}>
Create
      </Button>
    </Form>
  );
};

PostForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
};

export default PostForm;
