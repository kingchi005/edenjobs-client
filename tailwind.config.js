import twElements from "tw-elements";

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./app/**/*.{html,js,css}",
		"./node_modules/tw-elements/dist/js/**/*.js",
	],
	plugins: [require("tw-elements/dist/plugin.cjs")],
	darkMode: "class",
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [

//   ],
//   darkMode: "class",
//   plugins: [require("tw-elements/dist/plugin.cjs")],
// };
