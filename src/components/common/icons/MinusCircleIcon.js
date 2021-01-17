import React from 'react';
import { AiOutlineMinusCircle } from 'react-icons/ai';

function MinusCircleIcon(props) {
  const handleClick = () => {
    if (!props.disabled && props.handleClick) {
      props.handleClick();
    }
  };

  return (
    <div className={`icon minus-circle-icon ${props.disabled ? 'disabled' : ''}`} onClick={handleClick}>
      <AiOutlineMinusCircle />
    </div>
  );
}

export default MinusCircleIcon;
