import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

function PlusCircleIcon(props) {
  const handleClick = () => {
    if (!props.disabled && props.handleClick) {
      props.handleClick();
    }
  };

  return (
    <div className={`icon plus-circle-icon ${props.disabled ? 'disabled' : ''}`} onClick={handleClick}>
      <AiOutlinePlusCircle />
    </div>
  );
}

export default PlusCircleIcon;
