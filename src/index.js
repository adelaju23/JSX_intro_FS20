var React = require("react");
var ReactDOM = require("react-dom");

let name = "Dear Dev";
let message = "First do it; then do it right; then do it better.";

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>React at work says: {message}</p>
  </div>,
  document.getElementById("root")
);
