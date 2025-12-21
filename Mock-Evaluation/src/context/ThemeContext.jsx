import { createContext, useState } from "react";

export const ThemeContext= createContext();
export const ThemeProvider= ({childern})=>
{
    const[theme,setTheme]= useState("light");
    const toggleTheme=()=>{
        setTheme((prev)=>(prev==="light"?"dark":"light"))
    };
    return(
        <ThemeContext.Provider values={{ theme,toggleTheme}}>
            {childern}
        </ThemeContext.Provider>
    );
}