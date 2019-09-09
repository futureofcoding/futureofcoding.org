// https://observablehq.com/@observablehq/downloading-and-embedding-notebooks

// Load the Observable runtime and inspector.
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";

import notebook from "./observable.js";


new Runtime().module(notebook, name => {
  if (name === "reviewsAndTags") {
    return new Inspector(document.querySelector("#reviewsAndTags"));
  } 
});
