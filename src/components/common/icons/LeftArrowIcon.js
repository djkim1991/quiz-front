import React from 'react';
import { BiLeftArrow } from 'react-icons/bi';


function LeftArrowIcon(props) {
  const handleClick = () => {
    if (!props.disabled && props.handleClick) {
      props.handleClick();
    }
  };

  return (
    <div className={`left-arrow-icon ${props.disabled ? 'disabled' : ''}`} onClick={handleClick}>
      <BiLeftArrow />
    </div>
  );
}

export default LeftArrowIcon;
