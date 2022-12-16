import { useState, useEffect } from "react";

const useDark = () => {

    const [theme, setTheme] = useState(localStorage.theme);
    const colorTheme = theme === "dark" ? "light" : "dark";
  
    useEffect(() => {
        const root = window.document.documentElement;
        if(colorTheme === "dark") {
            root.classList.add("dark");
        }else {
            root.classList.remove("dark");

        }
        
        localStorage.setItem('theme', theme);
    }, [theme, colorTheme]);
  
    return [colorTheme, setTheme]
}
 
export default useDark;