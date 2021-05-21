import { html, render } from "lit";
const name = html `<b>Зюзя</b>`;
const elem = html `<div>Привет, ${name}</div>`;
render(elem, document.getElementById("root"));
//# sourceMappingURL=index.js.map