import { LitElement, html, render, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("welcome-el")
class WelcomeElement extends LitElement {
  @property({ type: String })
  name = "";

  @state() count = 0;

  firstUpdated() {
    this.count = 2;
  }

  onResize() {
    console.log("resize");
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("resize", this.onResize);
  }

  updated(prevProps: PropertyValues<this>) {
    console.log(prevProps);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("resize", this.onResize);
  }

  render() {
    return html`<div>
      ${this.name}
      <button @click=${() => this.count++}>click ${this.count}</button>
    </div>`;
  }
}

function Welcome(props) {
  return html`Welcome, ${props.name}`;
}
render(
  Welcome({ name: "Ivan" }),
  document.querySelector(".welcome") as HTMLElement
);
