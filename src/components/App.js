import React from "react";
import Timer from "./Timer";
import dawntrail from "../dawntrail.png";
import "../styles/App.css";
import moment from "moment";

function App() {
  const releaseDate = new Date("June 28, 2024 09:00:00 GMT+00:00");
  const localDate = moment(releaseDate)
    .format("MMMM Do h:mma")
    .toLocaleString();

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
          <p className="title">Early Access {localDate}</p>
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
