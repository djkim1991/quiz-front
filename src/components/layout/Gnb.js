import React from 'react';
import BackIcon from "../common/icons/BackIcon";


function Gnb() {
  return (
    <div className="gnb">
      {window.document.referrer ? <BackIcon handleClick={() => window.history.back()} /> : null}
      <span className="logo">단퀴즈</span>
    </div>
  );
}

export default Gnb;
