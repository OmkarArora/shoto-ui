import React, { useState } from "react";
import "./avatar.css";

export const Avatar = ({ children, alt, src, bgColor, height, width }) => {
  const [isImageBroken, setImageBrokenStatus] = useState(false);
  let style = {};
  if (bgColor) style.backgroundColor = `${bgColor}`;
  if (height) style.height = `${height}`;
  if (width) style.width = `${width}`;

  return (
    <div
      className="shoto-container-avatar"
      style={Object.keys(style).length !== 0 ? style : {}}
    >
      {children ? (
        <div className="shoto-avatar-child">{children}</div>
      ) : isImageBroken ? (
        <div
          className="shoto-avatar-fallback"
          style={
            height
              ? { fontSize: `calc(${height} - 40px)` }
              : { fontSize: "calc(var(--avatar-size) - 15px)" }
          }
        >
          {alt ? alt.toUpperCase().slice(0, 1) : "Z"}
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className="shoto-avatar"
          onError={() => setImageBrokenStatus(true)}
        />
      )}
    </div>
  );
};
