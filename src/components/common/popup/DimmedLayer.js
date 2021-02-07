import React, { Component } from 'react';
import HtmlUtil from "../../../util/HtmlUtil";

class DimmedLayer extends Component {
  componentDidMount() {
    HtmlUtil.addClass(window.document.body, 'scroll-lock');
  }

  componentWillUnmount() {
    HtmlUtil.removeClass(window.document.body, 'scroll-lock');
  }

  render() {
    return (
      <div className="dimmed-layer" />
    );
  }
}

export default DimmedLayer;
