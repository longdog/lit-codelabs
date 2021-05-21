import { html, render } from "lit";
const itemsToBuy = [
    html `<li>Bananas</li>`,
    html `<li>oranges</li>`,
    html `<li>apples</li>`,
    html `<li>grapes</li>`,
];
const elem = html `<div>
  To buy:
  <ul>
    ${itemsToBuy}
  </ul>
</div>`;
render(elem, document.getElementById("root"));
//# sourceMappingURL=index.js.map