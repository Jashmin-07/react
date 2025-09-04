import React from "react";
import "./ModelPopUp.css";

function ModelPopUp({ onClose, children }) {
  return (
    <div className="model-overlay">
      <div className="model-box">
        <button className="model-close" onClick={onClose}>
          ✖
        </button>
        {children}
      </div>
    </div>
  );
}

export default ModelPopUp;
