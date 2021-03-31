import React from "react";
import "./cardCustom.css";

export const CardImage = ({image, title}) => {
	return(
		<img src={image} alt={title} />
	)
}

export const CardContent = ({children}) => {
	return(
		<div className="container-cardContent">
			{children}
		</div>
	)
}

export const CardActions = ({children}) => {
	return (
		<div className="container-cardActions">
			{children}
		</div>
	)
}

export const CardCustom = ({children}) => {
	return (
		<div className="container-cardCustom">
			{children}
		</div>
	)
}