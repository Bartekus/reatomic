import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '.';

storiesOf('Link', module)
  .add('default', () => (
    <Link href="https://github.com/blockchainfoundryinc/reatomic">
      {'reatomic repository'}
    </Link>
  ))
  .add('reverse', () => (
    <Link href="https://github.com/blockchainfoundryinc/reatomic" reverse>
      {'reatomic repository'}
    </Link>
  ))
  .add('another palette', () => (
    <Link href="https://github.com/blockchainfoundryinc/reatomic" palette="secondary">
      {'reatomic repository'}
    </Link>
  ));
