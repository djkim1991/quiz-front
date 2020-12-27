import React from 'react';
import { BiRightArrow } from 'react-icons/bi';


function RightArrowIcon(props) {
  const handleClick = () => {
    if (!props.disabled && props.handleClick) {
      props.handleClick();
    }
  };

  return (
    <div className={`right-arrow-icon ${props.disabled ? 'disabled' : ''}`} onClick={handleClick}>
      <BiRightArrow />
    </div>
  );
}

export default RightArrowIcon;
