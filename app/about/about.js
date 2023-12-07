// import "../css/style.css";
import javascriptLogo from "/javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import { linkBtn } from "../js/components";
import { setUpHeader } from "./../js/layouts";

// document.querySelector("#app").innerHTML = `
const div = document.createElement("div");

setUpHeader({ title: "About Us" });

div.innerHTML = `
  <div class="bg-black">
    <a href="https://vitejs.dev" target="_blank">
      <img src="${javascriptLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${viteLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;
document.querySelector("#app").prepend(div);

setupCounter(document.querySelector("#counter"));
document
	.querySelector("#app")
	.append(linkBtn({ href: "/", title: "home page" }));
