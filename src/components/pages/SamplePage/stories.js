import React from 'react';
import { storiesOf } from '@storybook/react';
import SamplePage from '.';

storiesOf('SamplePage', module)
  .add('default', () => (
    <SamplePage />
  ));
