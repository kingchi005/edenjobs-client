import { stringToHTML } from "./utils";
import "../public/css/input.css";
export const linkBtn = ({ href, title }) => {
	const a = document.createElement("a");
	a.textContent = title;
	a.href = href;
	return a;
};

export const header = ({ title }) => {
	var parser = new DOMParser();
	var doc = parser.parseFromString(
		`	<meta charset="UTF-8" />
	 <link rel="icon" type="image/jpg" href="/logo.jpg" />
	 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	 <title>${title}</title>`,
		"text/html"
	);
	console.log(doc.querySelector("head"));
	return doc.querySelector("head");
};
// const meta1 = document.createElement("meta")
// const link = document.createElement("link")
// const meta2 = document.createElement("meta")
// const $title = document.createElement("title")
