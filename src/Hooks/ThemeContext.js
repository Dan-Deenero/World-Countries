import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext();

const themes ={
    light:{
        syntax: "hsl(0, 0%, 0%)",
        bg: "hsl(0, 0%, 98%)",
        ui: "hsl(0, 0%, 100%)",
        svg:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>,
      text:"Dark Mode"
    },
    dark:{
        syntax: "hsl(0, 0%, 100%)",
        bg: "hsl(207, 26%, 17%)",
        ui: "hsl(209, 23%, 22%)",
        svg:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>,
        text:"Light Mode"
    }
}

const ThemeContextProvider = ({children}) =>     {
    const tems = JSON.parse(localStorage.getItem('theme'))
    const [theme, setTheme] = useState(tems);

    useEffect(() => {
      const themesData = JSON.parse(localStorage.getItem('theme'))
      
      if (themesData) {
          setTheme(themesData)
      }
    }, [])
  
  useEffect(() => {
      localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])
    
    
    const toggleTheme = () => {
      setTheme(prev => prev === "light" ? "dark": "light");
    };

        return (
            <ThemeContext.Provider value={{theme: themes[theme], toggleTheme}}>
                {children}
            </ThemeContext.Provider>
        );
    
}
 
export default ThemeContextProvider;