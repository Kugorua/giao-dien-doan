import React, { useState, useEffect } from "react";
import "./ControlChart.css";
import axios from "axios";
import ctcQuatChay from "../../images/ctc-quay-chay.png";
import ctcBomVanh from "../../images/ctc-bom-chay-vanh.png";
import ctcBomtam from "../../images/ctc-bom-chay-tam.png";
import ctcPhuntam from "../../images/ctc-phun-tam.png";
import ctcPhunvanh from "../../images/ctc-phun-vanh.png";
const instance = axios.create();
export default function ControlChart() {
  const [data, setData] = useState({ quat: true, maybom: true, pun: true });
  const [infor, setInfor] = useState({});
  const sendData = (e) => {
    console.log(e.target.checked);
    setData({ ...data, [e.target.name]: e.target.checked });

    console.log(infor);
  };
  useEffect(() => {
    instance.post("/auth/create", data).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  }, [data]);
  useEffect(() => {
    const time = setInterval(() => {
      axios.get("/auth/google").then((result) => {
        setInfor(result.data);
      });
    }, 1000);
  }, []);
  return (
    <div className="control">
      <div className="control-chart">
        <h2>CONTROL</h2>

        <div className="control-content">
          {console.log("c2", infor.doam)}
          <div className="control-content__service">
            {" "}
            <div className="control-chart__pan">
              <label class="switch">
                <input
                  type="checkbox"
                  name="quat"
                  checked={data.quat}
                  onChange={sendData}
                />
                <span class="slider"></span>
              </label>
              <div className="icon-quat">
                <img
                  src={ctcQuatChay}
                  className={!data.quat && "non-animation"}
                  alt="img"
                />
              </div>
            </div>
            <div className="control-chart__quater">
              <label class="switch">
                <input
                  type="checkbox"
                  name="maybom"
                  checked={data.maybom}
                  onChange={sendData}
                />
                <span class="slider"></span>
              </label>
              <div className="icon-quater">
                <img className="icon-quater__vanh" src={ctcBomVanh} alt="img" />
                <img
                  className={`icon-quater__tam ${
                    !data.maybom && "non-animation"
                  }`}
                  src={ctcBomtam}
                  alt="img"
                />
              </div>
            </div>
            <div className="control-chart__sprinkler">
              <label class="switch">
                <input
                  type="checkbox"
                  name="pun"
                  checked={data.pun}
                  onChange={sendData}
                />
                <span class="slider"></span>
              </label>
              <div className="icon-sprinkler">
                <img
                  className="icon-sprinkler__vanh"
                  src={ctcPhunvanh}
                  alt="img"
                />
                <img
                  className={`icon-sprinkler__tam ${
                    !data.pun && "non-animation"
                  }`}
                  src={ctcPhuntam}
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="control-content__infor">
            <table>
              <tr>
                <th>Name</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>temperature</td>
                <td>{`${infor.nhietdo}°C`}</td>
              </tr>
              <tr>
                <td>Soil moisture</td>
                <td>{`${infor.doam}%`}</td>
              </tr>
              <tr>
                <td>Air humidity</td>
                <td>10 %</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
