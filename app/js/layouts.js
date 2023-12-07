import { header } from "./components";

export const setUpHeader = ({ title,  }) => {
	document.querySelector("html").prepend(header({ title,  }));
};
