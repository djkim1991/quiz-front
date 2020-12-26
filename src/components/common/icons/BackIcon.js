import React from 'react';
import { IoChevronBackSharp } from 'react-icons/io5';


function BackIcon(props) {
  return (
    <div id="gnbBackBtn" className="back-icon" onClick={() => props.handleClick()}>
      <IoChevronBackSharp />
    </div>
  );
}

export default BackIcon;
