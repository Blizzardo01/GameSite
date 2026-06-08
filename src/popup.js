class Popup extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.textContent = "hello world";
    console.log("Added custom element");
  }
}

customElements.define("popup-thing", Popup);