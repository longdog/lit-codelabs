import { LitElement, html, render } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("welcome-el")
class WelcomeElement extends LitElement {
  @property({ type: String })
  name = "";

  @state() count = 0;

  firstUpdated() {
    this.count = 2;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("resize", () => console.log("resize"));
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
