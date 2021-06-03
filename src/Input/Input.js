import React, { useEffect, createRef } from "react";
import "./input.css";

export const Input = ({
  label,
  activeColor,
  textColor,
  restingColor,
  ...props
}) => {
  const shotoInput = createRef();

  useEffect(() => {
    if (activeColor) {
      shotoInput.current.style.setProperty("--shoto-input-active-color", activeColor);
    }
    if (textColor) {
      shotoInput.current.style.setProperty("--shoto-input-text-color", textColor);
    }
    if (restingColor) {
      shotoInput.current.style.setProperty(
        "--shoto-input-resting-color",
        restingColor
      );
    }
  }, [activeColor, textColor, restingColor, shotoInput]);

  return (
    <div className="shoto-input-wrapper" ref={shotoInput}>
      <input {...props} />
      <label className="label-name">
        <span className="content-name">{label}</span>
      </label>
    </div>
  );
};
