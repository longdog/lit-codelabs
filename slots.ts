import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("slot-elem")
class SlotElem extends LitElement {
  render() {
    return html`<div>
      <slot name="header"><span>default</span></slot>
      <slot name="footer"></slot>
    </div>`;
  }
}

@customElement("with-slot")
class WithSlot extends LitElement {
  render() {
    return html`
      <slot-elem>
        <h1 slot="header">HEADER slot</h1>
        <h2 slot="footer">FOOTER slot</h2>
      </slot-elem>
    `;
  }
}
