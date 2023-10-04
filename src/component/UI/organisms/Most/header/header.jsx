import "./header.css";
import React from "react";
// import { RunningHi } from "./RunningHi";

export const Header = () => {
  return (
    <div className="component">
      <p className="LOGO">
        <span className="span">RUNNINGHI</span>
      </p>
      <p className="LOGIN">
        <span className="span">LOGIN</span>
        <span className="text-wrapper-2">&nbsp;</span>
      </p>
      <div className="div">ABOUT</div>
      <div className="text-wrapper-3">
        ㅡ<br />ㅡ<br />ㅡ {/* svg 파일로 변경 */}
      </div>
      {/* <RunningHi
        className="RUNNING-HI-instance"
        divClassName="design-component-instance-node"
        text="RUNNINGHI"
      /> */}
    </div>
  );
};
