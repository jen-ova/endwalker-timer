import React from "react";
import Timer from "./Timer";
import logo from "../ew.png";
import "../styles/App.css";

function App() {
  return (
    <div className="app-bgimage">
      <div className="container">
        <img src={logo} alt="endwalker" />
        <p className="title">Early Access 3rd December 9am GMT</p>
        <Timer />
        <footer>
          Created by <a href="http://www.github.com/jen-ova">Jen Ova</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
