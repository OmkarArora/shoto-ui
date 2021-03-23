import React, { createContext, useContext, useState } from "react";
// import { darkTheme, lightTheme } from "../theme";

const ShotoThemeContext = createContext();

// export const ShotoThemeProvider = ({children}) =>{
// 	const [theme, setTheme] = useState(darkTheme)
// 	const changeTheme = newTheme => {
// 		if(newTheme === "light") setTheme(lightTheme);
// 		return setTheme(darkTheme);
// 	}
// 	return (
// 		<ShotoThemeContext.Provider value={{theme, changeTheme}}>
// 			{children}
// 		</ShotoThemeContext.Provider>
// 	)
// }

export const ShotoThemeProvider = ({children}) =>{
	const [theme, setTheme] = useState("dark")
	const changeTheme = newTheme => setTheme(newTheme)

	return (
		<ShotoThemeContext.Provider value={{theme, changeTheme}}>
			{children}
		</ShotoThemeContext.Provider>
	)
}


export const useTheme = () => useContext(ShotoThemeContext);