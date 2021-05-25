import { LitElement, html, render, PropertyValues } from "lit";
import { customElement, property, state, query } from "lit/decorators.js";

@customElement("welcome-el")
class WelcomeElement extends LitElement {
  @property({ type: String })
  name = "";

  @query("input")
  inputEl!: HTMLInputElement;

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

  onClick() {
    this.inputEl.focus();
  }

  render() {
    return html`<div>
      ${this.name}
      <input type="text" /><br />
      <button @click=${this.onClick}>click ${this.count}</button>
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
