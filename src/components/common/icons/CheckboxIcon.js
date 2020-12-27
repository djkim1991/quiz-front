import React from 'react';
import { BsCheckBox } from 'react-icons/bs';


function CheckboxIcon(props) {
  const handleClick = () => {
    if (props.handleClick) {
      props.handleClick();
    }
  };

  return (
    <div className="icon checkbox-icon" onClick={handleClick}>
      <BsCheckBox />
    </div>
  );
}

export default CheckboxIcon;
