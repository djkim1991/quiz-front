import React from 'react';
import { BiRightArrow } from 'react-icons/bi';


function RightArrowIcon(props) {
  const handleClick = () => {
    if (props.handleClick) {
      props.handleClick();
    }
  };

  return (
    <div className="right-arrow-icon" onClick={handleClick}>
      <BiRightArrow />
    </div>
  );
}

export default RightArrowIcon;
