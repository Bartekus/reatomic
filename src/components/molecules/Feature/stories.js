import React from 'react';
import { storiesOf } from '@storybook/react';
import { Feature } from 'components';

storiesOf('Feature', module)
  .add('default', () => (
    <Feature title="reatomic">
      {'Ullamco duis in labore consectetur ad exercitation esse esse duis mollit sint.'}
    </Feature>
  ))
  .add('with link', () => (
    <Feature title="reatomic" link="https://github.com/blockchainfoundryinc/reatomic">
      {'Ullamco duis in labore consectetur ad exercitation esse esse duis mollit sint.'}
    </Feature>
  ))
  .add('with icon', () => (
    <Feature icon="close" title="reatomic">
      {'Ullamco duis in labore consectetur ad exercitation esse esse duis mollit sint.'}
    </Feature>
  ))
  .add('with code', () => (
    <Feature code="npm run build" title="reatomic">
      {'Ullamco duis in labore consectetur ad exercitation esse esse duis mollit sint.'}
    </Feature>
  ))
  .add('with soon', () => (
    <Feature soon title="reatomic">
      {'Ullamco duis in labore consectetur ad exercitation esse esse duis mollit sint.'}
    </Feature>
  ));
