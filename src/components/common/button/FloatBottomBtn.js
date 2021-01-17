import React, { Component } from 'react';
import Link from "../navi/Link";
import HtmlUtil from "../../../util/HtmlUtil";

class FloatBottomBtn extends Component {
  constructor(props) {
    super(props);

    HtmlUtil.addClass(window.document.body, 'has-btn-type1');
  }

  componentWillUnmount() {
    HtmlUtil.removeClass(window.document.body, 'has-btn-type1');
  }

  render() {
    const { text, to } = this.props;

    const handleClick = () => {
      if (this.props.handleClick) {
        this.props.handleClick();
      }
    };

    return (
      <div className="btn-type1" onClick={handleClick}>
        <Link to={to}>{text}</Link>
      </div>
    );
  }
}

export default FloatBottomBtn;
