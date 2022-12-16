import useDark from "./Hooks/useDark";
import { useState } from "react";

const Header = () => {
    const [colorTheme, setTheme] = useDark();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );
    const[svg, setSvg] = useState(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>)
    // const[text, setText] = useState(localStorage.text)

    
    
    
    
    localStorage.setItem('text', 'Light Mode')
    
    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
        if(localStorage.getItem('text')){
            localStorage.setItem('text', 'Dark Mode');
            setSvg(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>)
        }
        else if(localStorage.getItem("text") === 'Dark Mode'){
            
            localStorage.setItem("text", "Light Mode")
            // console.log("When theme is in dark mode" + localStorage.getItem("text"));
            setSvg(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
          )
        }
    };
    // toggleDarkMode()

    return ( 
        <nav className={`bg-lightMode-100 dark:bg-darkMode-100 lg:px-3 shadow-md fixed w-full py-8 lg:py-5 flex items-center gibo`}>
            <div className="flex justify-between items-center w-full mx-7">
                <h3 className="font-bold">Where in the world?</h3>
                <div className="flex gap-4 cursor-pointer btn" id="dark-mode-toggle" onClick={() =>toggleDarkMode()} checked={darkSide}>
                    <span>
                        {svg}      
                    </span>
                    <p className="font-semibold">{localStorage.getItem("text")}</p>
                </div>
            </div>
        </nav>
     );
}
 
export default Header;