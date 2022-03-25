import React from "react";
import Timer from "./Timer";
// import logo from "../ew.png";
// import patch61 from "../61-newfoundadventure.png";
import liveletter from "../liveletter.png";
import "../styles/App.css";

function App() {
  return (
    <div className="fixed-background">
      <div className="wrapper">
        <div className="container">
          {/* <img src={logo} alt="endwalker" className="logo" /> */}
          {/* <p className="title"> */}
          <a
            href="https://eu.finalfantasyxiv.com/endwalker/patch_6_1/"
            target="_blank"
            rel="noreferrer">
            <img src={liveletter} alt="liveletter" className="preview" />
          </a>
          <p className="title">Friday 1st April 11am BST</p>
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
