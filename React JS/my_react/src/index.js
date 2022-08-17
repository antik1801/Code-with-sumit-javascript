import React from "react";
import  ReactDOM  from "react-dom";
import  "./app.css"
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Clock from "./components/Clock"



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals();

