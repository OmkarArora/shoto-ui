import React from "react";
import "./badge.css";

export const Badge = ({children, badgeContent, bgColor, color}) =>  {
	return (
		<div className="shoto-container-badge">
			<span className="shoto-badge" style={{backgroundColor: bgColor, color: color, right: badgeContent.toString().length>3?"-25px":"-15px"}}>{badgeContent.toString().length>3?badgeContent.toString().slice(0,3)+"+" :badgeContent}</span>
			<div className="shoto-badge-child">
				{children}
			</div>
		</div>
	)
}