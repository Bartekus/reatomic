import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'components';
import { LoginModal } from 'containers';
import { Image, InnerButton } from './style';

const UserButton = ({
  user, onLogin, onLogout, ...props
}) => {
  return (
    <div>
      { user
      && (
      <Button {...props} onClick={onLogout}>
        <InnerButton>
          <Image src={user.picture} width={20} height={20} />
          Sign out
        </InnerButton>
      </Button>
      )
      }
      { !user && (
      <Button {...props} onClick={onLogin}>
Sign in
      </Button>
      ) }
      <LoginModal />
    </div>
  );
};

UserButton.propTypes = {
  user: PropTypes.shape({
    picture: PropTypes.string.isRequired,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default UserButton;
