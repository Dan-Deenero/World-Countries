import { useContext } from "react";
import { ThemeContext } from "./Hooks/ThemeContext";

const Header = () => {
    const {isLightTheme, light, dark, toogleTheme} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;


    return ( 
        <nav className={`lg:px-3 shadow-md fixed w-full py-8 lg:py-5 flex items-center gibo`} style={{backgroundColor: theme.ui, color: theme.syntax}}>
            <div className="flex justify-between items-center w-full mx-7">
                <h3 className="font-bold">Where in the world?</h3>
                <div className="flex gap-4 cursor-pointer btn" id="dark-mode-toggle" onClick={toogleTheme}>
                    <span>
                        {theme.svg}      
                    </span>
                    <p className="font-semibold">{theme.text}</p>
                </div>
            </div>
        </nav>
     );
}
 
export default Header;