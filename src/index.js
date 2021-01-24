var React = require("react");
var ReactDOM = require("react-dom");

let name = "Dear Dev";
let message = "First do it; then do it right; then do it better.";

let nameMessage;
if (name.length < 6) nameMessage = "short";
else nameMessage = "long";

let today = new Date();

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>React at work says: {message}</p>
    <p>
      Your name is {name.length < 6 ? "short" : "long"}. (ternary operator
      expression)
    </p>
    <p>Your name is {nameMessage}. (variable and if-statement)</p>
    <p>Today we have {today.toString()}</p>
  </div>,
  document.getElementById("root")
);
