import React, {useEffect} from "react";
import "./snackbar.css";

export const Snackbar = ({ children, autoHideDuration, onClose, open }) => {

	useEffect(() => {
		let timeoutID =  null;
		if(autoHideDuration){
			timeoutID = setTimeout(() => onClose(), autoHideDuration);
		}
		return () => {
			if(timeoutID) clearTimeout(timeoutID);
		}
	})
  return open ? (
    <div className="shoto-snackbar-container">{children}</div>
  ) : (
    <></>
  );
};
