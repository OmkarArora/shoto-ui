import React from "react";
import { BsCheckCircle, BsX } from "react-icons/bs";
import { FiAlertCircle, FiAlertTriangle, FiInfo } from "react-icons/fi";
import "./alert.css";

export const Alert = ({ children, severity, onClose }) => {
	const getIcon = () => {
		if(severity==="error") return <FiAlertTriangle/>;
		if(severity==="warning") return <FiAlertCircle/>;
		if(severity==="info") return <FiInfo/>;
		return <BsCheckCircle/>;
	}
  return (
	<div className={`shoto-container-alert ${severity} dark`}>
		<div className="container-left">
			<div className="icon-container">
				{getIcon()}
			</div>
			<div className="alert-child">
				{children}
			</div>
		</div>
		
		{onClose && <div className="icon-container icon-close" onClick={() => onClose()}><BsX/></div>}
    </div>
  );
};
