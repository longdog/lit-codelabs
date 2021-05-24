var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
let SlotElem = class SlotElem extends LitElement {
    render() {
        return html `<div>
      <slot name="header"><span>default</span></slot>
      <slot name="footer"></slot>
    </div>`;
    }
};
SlotElem = __decorate([
    customElement("slot-elem")
], SlotElem);
let WithSlot = class WithSlot extends LitElement {
    render() {
        return html `
      <slot-elem>
        <h1 slot="header">HEADER slot</h1>
        <h2 slot="footer">FOOTER slot</h2>
      </slot-elem>
    `;
    }
};
WithSlot = __decorate([
    customElement("with-slot")
], WithSlot);
//# sourceMappingURL=slots.js.map