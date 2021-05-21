var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
let Clock = class Clock extends LitElement {
    constructor() {
        super(...arguments);
        this.date = new Date();
        this.timerID = -1;
    }
    tick() {
        this.date = new Date();
    }
    connectedCallback() {
        super.connectedCallback();
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        clearInterval(this.timerID);
    }
    render() {
        return html ` <div>
      <h1>Hello, world!</h1>
      <h2>It is ${this.date.toLocaleTimeString()}.</h2>
    </div>`;
    }
};
__decorate([
    state()
], Clock.prototype, "date", void 0);
Clock = __decorate([
    customElement("clock-elem")
], Clock);
//# sourceMappingURL=Clock.js.map