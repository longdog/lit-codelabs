import { html, render } from "lit";
const props = {
    disabled: false,
    label: "my label",
    class: "my class",
    value: "my value",
};
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
  <input
    ?disabled=${props.disabled}
    class="${props.class}"
    .value=${props.value}
    @click=${() => alert("click!")}
    @input=${(e) => console.log(e.target.value)}
  />
</div>`;
render(elem, document.getElementById("root"));
//# sourceMappingURL=index.js.map