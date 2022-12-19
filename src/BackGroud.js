import React from "react";
import HG from "./assest/HG.png";
import MG from "./assest/MG.png";
import VG from "./assest/VG.png";

import "./background.css";
import Home from "./HomePage/Home";
export default function backGround() {
  return (
    <>
      <div className="background-imgs-wapper">
      <div className="home-componet">
        <Home/>
        </div>
        <div>
          <div className="HG">
            <img src={HG} />
          </div>

          <div className="MG">
            <img src={MG} />
          </div>
          <div className="VG">
            <img src={VG} />
          </div>
        </div>
       
        
      </div>
    </>
  );
}
