import { Carousel, initTE, Modal, Ripple } from "tw-elements";
import { setUpHeader } from "../js/layouts";

// Initialization for ES Users

initTE({ Modal, Ripple });

setUpHeader({ title: "twe" });
initTE({ Carousel }, true); // set second parameter to true if you want to use a debugger
