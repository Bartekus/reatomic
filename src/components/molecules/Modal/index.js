import React from 'react';
import PropTypes from 'prop-types';

import { IconButton } from 'components';
import {
  Content, Header, StyledHeading, StyledReactModal,
} from './style';

const Modal = ({
  children, title, closeable, onClose, ...props
}) => {
  const hasHeader = title || closeable;
  const { reverse } = props;

  return (
    <StyledReactModal
      contentLabel={title || 'Modal'}
      onRequestClose={onClose}
      hasHeader={hasHeader}
      {...props}
    >
      { hasHeader
      && (
      <Header>
        <StyledHeading level={2} reverse={reverse}>
          { title }
        </StyledHeading>
        { closeable && <IconButton icon="close" onClick={onClose} palette="white" reverse /> }
      </Header>
      )
      }
      <Content>
        { children }
      </Content>
    </StyledReactModal>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  closeable: PropTypes.bool,
  reverse: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
