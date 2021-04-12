//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//It should display 2 paragraph HTML elements.
const fname = "Allen";
const lname = "McStubbins";
//call date as constructor to return a date object, then use desired instance on it
const date = new Date();
const year = date.getFullYear();
ReactDOM.render(
  <div>
    <p>
      Created by {fname} {lname}
    </p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
