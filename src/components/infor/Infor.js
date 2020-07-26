import React from "react";
import "./Infor.css";
import ifCai from "../../images/if-cai.png";
import ifHung from "../../images/if-hung.png";
import ifOt from "../../images/if-ot.png";
export default function Control() {
  return (
    <div className="infor">
      <div className="infor__type-tree">
        <div className="type-tree">
          <img src={ifCai} />
        </div>
        <div className="type-tree">
          <img src={ifHung} />
        </div>
        <div className="type-tree">
          <img src={ifOt} />
        </div>
      </div>
    </div>
  );
}
