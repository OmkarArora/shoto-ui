import React from "react";
import "./button.css";

export const Button = ({
  size,
  bgColor,
  textColor,
  rounded,
  elevated,
  children,
  type,
  onClick,
  ...props
}) => {
  const computeStyle = () => {
    let style = {};
    if (size) {
      switch (size) {
        case "small":
          style.fontSize = "0.8125rem";
          style.padding = "4px 10px";
          break;
        case "medium":
          style.fontSize = "0.875rem";
          style.padding = "5px 15px";
          break;
        case "large":
          style.fontSize = "0.9375rem";
          style.padding = "8px 22px";
          break;
        default:
          style.fontSize = "0.875rem";
          style.padding = "5px 15px";
      }
    }
    if (bgColor) {
      style.backgroundColor = bgColor;
    }
    if (textColor) {
      style.color = textColor;
    }
    if (rounded) {
      style.borderRadius = "9999px";
    }
    if (elevated) {
      style.boxShadow =
        "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)";
    }

    if (type && type === "icon") {
      style.padding = "1rem";
      style.fontSize = "1.3rem";
      style.borderRadius = "50%";
    }

    return style;
  };

  if (onClick)
    return (
      <button
        style={computeStyle()}
        className="shoto-button"
        onClick={() => onClick()}
        {...props}
      >
        <span>{children}</span>
      </button>
    );

  return (
    <button style={computeStyle()} className="shoto-button" {...props}>
      <span>{children}</span>
    </button>
  );
};
