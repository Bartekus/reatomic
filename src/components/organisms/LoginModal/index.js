import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import { IconButton } from 'components';
import { Modal } from 'containers';

import { Wrapper } from './style';

class LoginModal extends Component {
  static propTypes = {
    user: PropTypes.object,
    onFacebookLogin: PropTypes.func.isRequired,
    onGoogleLogin: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  componentWillMount() {
    /* istanbul ignore next */
    if (process.env.NODE_ENV !== 'test') {
      ReactModal.setAppElement('#root');
    }
  }

  componentWillReceiveProps(nextProps) {
    const { onClose, user } = this.props;
    if (!user && nextProps.user) {
      onClose();
    }
  }

  render() {
    const { onFacebookLogin, onGoogleLogin, ...props } = this.props;
    return (
      <Modal title="Login" name="login" closeable {...props}>
        <Wrapper>
          <IconButton onClick={onFacebookLogin} icon="facebook">
            {'Connect with Facebook'}
          </IconButton>
          <IconButton onClick={onGoogleLogin} icon="google">
            {'Connect with Google'}
          </IconButton>
        </Wrapper>
      </Modal>
    );
  }
}

export default LoginModal;
