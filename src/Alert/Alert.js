import React from "react";
import { useTheme } from "../ShotoContexts/theme-context";
import { BsCheckCircle } from "react-icons/bs";
import { FiAlertCircle, FiAlertTriangle, FiInfo } from "react-icons/fi";
import "./alert.css";

export const Alert = ({ children, severity }) => {
  const { theme } = useTheme();
//   const getStyle = () => {
// 	  let style = {};
//     if (severity === "error")
//       style = {
//         color: `${theme.alert.error.color}`,
//         backgroundColor: `${theme.alert.error.bgColor}`,
//       };
//     if (severity === "warning")
//       style =  {
//         color: `${theme.alert.warning.color}`,
//         backgroundColor: `${theme.alert.warning.bgColor}`,
//       };
//     if (severity === "info")
//       style =  {
//         color: `${theme.alert.info.color}`,
//         backgroundColor: `${theme.alert.info.bgColor}`,
//       };
//     if (severity === "success")
//       style =  {
//         color: `${theme.alert.success.color}`,
//         backgroundColor: `${theme.alert.success.bgColor}`,
//       };
// 	  return style;
//   };

	const getIcon = () => {
		if(severity==="error") return <FiAlertTriangle/>;
		if(severity==="warning") return <FiAlertCircle/>;
		if(severity==="info") return <FiInfo/>;
		return <BsCheckCircle/>;
	}
  return (
    // <div className={`shoto-container-alert ${severity}`} style={getStyle()}>
    //   {children}
    // </div>

	<div className={`shoto-container-alert ${severity} ${theme}`}>
		<div className="icon-container">
			{getIcon()}
		</div>
		<div className="alert-child">
			{children}
		</div>
    </div>
  );
};
