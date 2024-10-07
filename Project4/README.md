## Problem 1

- What happens after I type `http://localhost:3000/getting-started.html` in the browser?

1. The browser receives the getting-started.html file and begins parsing it from top to bottom.
2. Execute `<script src="modelData/example.js"></script>`, which is in the head section, before the entire page is loaded.
  - `var cs142models;`: define a global variable that can be accessed by `window.cs142models`.
3. `<div id="reactapp"></div>` is encountered, but now it's empty.
4. `<script src="compiled/gettingStarted.bundle.js"></script>`: This is a JavaScript file that contains the bundled React code. The file is generated according to `gettingStarted.jsx`, as indicated in the `webpack.config.js` file.
5. Inside `gettingStarted.bundle.js`: mount the `Example` component into the previous root `div`.