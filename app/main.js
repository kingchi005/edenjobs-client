// import "./css/style.css";
import javascriptLogo from "/javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import { linkBtn } from "./js/components.js";
import { setUpHeader } from "./js/layouts.js";

import { Collapse, initTE } from "tw-elements";

initTE({ Collapse });
const div = document.createElement("div");

setUpHeader({
	title: "Eden jobs",
});

// div.innerHTML = `
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
// `;

// document.querySelector("#app").prepend(div);

// setupCounter(document.querySelector("#counter"));

// document
// 	.querySelector("#app")
// 	.append(linkBtn({ href: "about/", title: "about page" }));

document.querySelector(".recent-jobs").innerHTML = [...Array(7)]
	.map(
		() => `	<div class="recent-card shadow-md p-5 rounded-md">
						<div class="recent-head flex items-center mb-4">
							<img
								src="/images/brendan.jpg"
								alt=""
								class="rounded-full w-10 h-10 object-cover inline-block mr-4"
							/>
							<div class="m-0 p-0 box-border outline-none border-none">
								<b class="name block">Sales Executive</b>
								<small class="desc text-gray-700"
									>Gafford Property &amp; Homes</small
								>
							</div>
						</div>

						<div class="tags flex items-center">
							<span
								class="tag inline-block mr-4 px-4 py-2 border border-blue-500 rounded-full bg-blue-200 text-blue-500 text-sm"
								>Full Time</span
							>
							<span
								class="tag inline-block mr-4 px-4 py-2 border border-blue-500 rounded-full bg-blue-200 text-blue-500 text-sm"
								>Onsite</span
							>
							<span
								class="tag inline-block mr-4 px-4 py-2 border border-blue-500 rounded-full bg-blue-200 text-blue-500 text-sm"
								>Junior</span
							>
						</div>

						<p class="my-4">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
							architecto obcaecati, minima officiis enim id repellendus beatae
							voluptate provident aut doloremque! Vel, debitis esse impedit
							praesentium pariatur repellendus consequatur in.
						</p>

						<div
							class="botton pt-4 border-t border-gray-200 flex items-center justify-between text-sm text-gray-700"
						>
							<div class="salary">Salary: N210,000 - N300,000</div>
							<div class="posted">Posted 2 hours ago</div>
						</div>
					</div>`
	)
	.join("");
