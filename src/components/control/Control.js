import React from "react";
import "./Control.css";

import ctOnLigth from "../../images/ct-den-sang.png";
import ctOffLigth from "../../images/ct-den-tat.jpg";
export default function Control() {
  return (
    <div className="control">
      <div className="control__light-water">
        <div className="control__light light-water">
          <h2>Control Lights</h2>
          <div className="control__light-1 light">
            <span>Ligth 1</span>
            <img src={ctOnLigth} alt={"img"} />
          </div>
          <div className="control__light-2 light">
            <span>Ligth 1</span>
            <img src={ctOffLigth} alt={"img"} />
          </div>
        </div>
        <div className="control__water light-water">
          <h2>Control Water</h2>
        </div>
      </div>
      <div className="control__fan ">
        <div>
          <h2>Control Fan</h2>
        </div>
      </div>
    </div>
  );
}
