import Image from 'next/image';
import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Make sure to bind modal to your appElement

const ImageModal = ({ isOpen, onRequestClose, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: 'black',
          border: 'none',
          borderRadius: '10px',
        },
      }}
    >
      <Image src={imageUrl} alt="Full-size" style={{ width: '100%', height: 'auto' }} />
    </Modal>
  );
};

export default ImageModal;
