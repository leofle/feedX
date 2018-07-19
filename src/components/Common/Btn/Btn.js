import React from "react";
import "./Btn.css";

const Btn = props => (
  <div className="btnWrapper">
    <input {...props} />
  </div>
);

export default Btn;
