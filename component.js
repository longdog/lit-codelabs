var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, render } from "lit";
import { customElement, property, state } from "lit/decorators.js";
let WelcomeElement = class WelcomeElement extends LitElement {
    constructor() {
        super(...arguments);
        this.name = "";
        this.count = 0;
    }
    firstUpdated() {
        this.count = 2;
    }
    render() {
        return html `<div>
      ${this.name}
      <button @click=${() => this.count++}>click ${this.count}</button>
    </div>`;
    }
};
__decorate([
    property({ type: String })
], WelcomeElement.prototype, "name", void 0);
__decorate([
    state()
], WelcomeElement.prototype, "count", void 0);
WelcomeElement = __decorate([
    customElement("welcome-el")
], WelcomeElement);
function Welcome(props) {
    return html `Welcome, ${props.name}`;
}
render(Welcome({ name: "Ivan" }), document.querySelector(".welcome"));
//# sourceMappingURL=component.js.map