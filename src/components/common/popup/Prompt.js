import React from 'react';
import DimmedLayer from "./DimmedLayer";

function Prompt(props) {
  const { text } = props;

  return (
    <div>
      <div className="popup prompt">
        <div className="text">
          <span>{text}</span>
        </div>
        <div className="buttons">
          <button onClick={props.handleSubmit}><span>네</span></button>
          <button onClick={props.handleCancel}><span>아니요</span></button>
        </div>
      </div>
      <DimmedLayer />
    </div>
  );
}

export default Prompt;
