import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("clock-elem")
class Clock extends LitElement {
  @state()
  private date = new Date();

  private timerID = -1 as unknown as ReturnType<typeof setTimeout>;

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
    return html` <div>
      <h1>Hello, world!</h1>
      <h2>It is ${this.date.toLocaleTimeString()}.</h2>
    </div>`;
  }
}
