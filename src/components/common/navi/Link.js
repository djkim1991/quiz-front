import React from 'react';

function Link(props) {
  const handleClick = () => {
    if (props.to) {
      window.location.href = props.to;
    }
  };

  return (
    <button onClick={() => handleClick()}>
      {props.children}
    </button>
  );
}

export default Link;
