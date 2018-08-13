import React from 'react';
import { storiesOf } from '@storybook/react';
import NotFoundPage from '.';

storiesOf('NotFoundPage', module)
  .add('default', () => (
    <NotFoundPage />
  ));
