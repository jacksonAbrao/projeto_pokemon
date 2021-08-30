/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import React from 'react';

function Modal({ id = 'modal', onClose = () => {}, children }) {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };
  return (
    <div id={id} className="modal" onClick={handleOutsideClick}>
      <div className="container mx-4">
        <button className="close" onClick={onClose} />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
