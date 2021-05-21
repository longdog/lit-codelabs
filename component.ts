import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("welcome-el")
class WelcomeElement extends LitElement {
  @property({ type: String })
  name = "";

  render() {
    return html`<div>${this.name}</div>`;
  }
}
