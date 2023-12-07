import fs from "fs";
import { JSDOM } from "jsdom";

function convertStyleTagToInlineStyles(htmlFile) {
	const html = fs.readFileSync(htmlFile, "utf-8");
	const dom = new JSDOM(html);
	const document = dom.window.document;

	// Find all <style> tags
	const styleTags = document.querySelectorAll("style");

	// Iterate over the <style> tags
	styleTags.forEach((styleTag) => {
		// Get the CSS rules from the <style> tag
		const cssRules = styleTag.sheet.cssRules;

		// Iterate over the CSS rules
		for (let i = 0; i < cssRules.length; i++) {
			const cssRule = cssRules[i];

			// Check if it's a CSSStyleRule
			if (cssRule instanceof dom.window.CSSStyleRule) {
				const selectorText = cssRule.selectorText;
				const cssText = cssRule.style.cssText;

				// Find elements matching the selector and apply the inline styles
				const elements = document.querySelectorAll(selectorText);
				elements.forEach((element) => {
					element.setAttribute("style", cssText);
				});
			}
		}

		// Remove the <style> tag
		styleTag.parentNode.removeChild(styleTag);
	});

	// Return the modified HTML
	return dom.serialize();
}

// Usage example
const htmlFile = "C:/Users/Kingchi/Documents/KingChi/index.html";
const htmlFilu = "C:/Users/Kingchi/Documents/KingChi/indux.html";
const convertedHtml = convertStyleTagToInlineStyles(htmlFile);

fs.writeFile(htmlFilu, convertedHtml, () => console.log("done"));
console.log(convertedHtml);
