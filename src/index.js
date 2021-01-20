var React = require("react");
var ReactDOM = require("react-dom");

ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));

let h1 = document.createElement("h1");
h1.innerHTML = "Hello World!";
document.getElementById("root").appendChild(h1);
