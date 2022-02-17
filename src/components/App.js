import React from "react";
import Timer from "./Timer";
// import logo from "../ew.png";
import liveletter from "../liveletter.png";
import "../styles/App.css";

function App() {
  return (
    <div className="fixed-background">
      <div className="wrapper">
        <div className="container">
          {/* <img src={logo} alt="endwalker" className="logo" /> */}
          <p className="title">
            <a href="https://sqex.to/htj" target="_blank" rel="noreferrer">
              <img src={liveletter} alt="liveletter" className="liveletter" />
            </a>
            19th February 2am GMT
          </p>
          <Timer />
          <footer>
            <p>
              Created by <a href="http://www.github.com/jen-ova">Jen Ova</a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
