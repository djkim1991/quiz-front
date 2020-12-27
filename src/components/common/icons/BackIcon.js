import React from 'react';
import { IoChevronBackSharp } from 'react-icons/io5';


function BackIcon(props) {
  const handleClick = () => {
    if (props.handleClick) {
      props.handleClick();
    }
  };

  return (
    <div className="icon back-icon" onClick={handleClick}>
      <IoChevronBackSharp />
    </div>
  );
}

export default BackIcon;
