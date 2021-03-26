import React from "react";
import "./tag.css";

export const Tag = ({children, color, borderColor}) => {
	let style = {};
	if(color) style.color = `${color}`;
	if(borderColor) style.borderColor = `${borderColor}`;
	return (
		<div className="shoto-tag" style={style}>
			{children}
		</div>
	)
}
