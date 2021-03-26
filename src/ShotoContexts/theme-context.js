import React, { createContext, useContext, useState } from "react";

const ShotoThemeContext = createContext();

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