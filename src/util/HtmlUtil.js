class HtmlUtil {
  static addClass(domElement, className) {
    const isNotDomElement = (!domElement);
    if (isNotDomElement) {
      return false;
    }

    const alreadyHasClassName = domElement.className.indexOf(className) > -1;
    if (alreadyHasClassName) {
      return false;
    }

    domElement.className += ` ${className}`;

    return true;
  }

  static removeClass(domElement, className) {
    const isNotDomElement = (!domElement);
    if (isNotDomElement) {
      return false;
    }

    const alreadyHasNotClassName = domElement.className.indexOf(className) === -1;
    if (alreadyHasNotClassName) {
      return false;
    }

    domElement.className = domElement.className.replace(className, '');

    return true;
  }
}

export default HtmlUtil;
