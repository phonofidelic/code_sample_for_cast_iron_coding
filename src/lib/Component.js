class Component {
  constructor({ elementName, className, content }) {
    this.el = elementName;
    this.className = className;
    this.content = content;
  }

  render() {
    const element = document.createElement(this.el);
    element.className = this.className;
    if (this.content) element.appendChild = this.content.render();

    return element;
  }
}

export default Component;
