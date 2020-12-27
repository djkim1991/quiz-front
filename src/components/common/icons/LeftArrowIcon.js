import React from 'react';
import { BiLeftArrow } from 'react-icons/bi';


function LeftArrowIcon(props) {
  const handleClick = () => {
    if (props.handleClick) {
      props.handleClick();
    }
  };

  return (
    <div className="left-arrow-icon" onClick={handleClick}>
      <BiLeftArrow />
    </div>
  );
}

export default LeftArrowIcon;
