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
