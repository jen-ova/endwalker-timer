import React from "react";
import Timer from "./Timer";
import dawntrail from "../dawntrail.png";
import "../styles/App.css";

function App() {
  return (
    <div className="fixed-background background-tint">
      <div className="wrapper">
        <div className="container">
          <a
            href="https://eu.finalfantasyxiv.com/endwalker/patch_6_1/"
            target="_blank"
            rel="noreferrer">
            <img src={dawntrail} alt="Dawntrail" className="preview" />
          </a>
          <p className="title">Early Access 28th June 10am BST</p>
          <Timer />
          {/* <footer>
            <p>
              Created by <a href="http://www.github.com/jen-ova">Jen Ova</a>
            </p>
          </footer> */}
        </div>
      </div>
    </div>
  );
}

export default App;
