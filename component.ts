import { LitElement, html, render } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("welcome-el")
class WelcomeElement extends LitElement {
  @property({ type: String })
  name = "";

  render() {
    return html`<div>${this.name}</div>`;
  }
}

function Welcome(props) {
  return html`Welcome, ${props.name}`;
}
render(
  Welcome({ name: "Ivan" }),
  document.querySelector(".welcome") as HTMLElement
);
