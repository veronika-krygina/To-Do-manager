import { useEffect, useState } from "react"
import Logo from "../assets/logo.svg"


export const Header = () => {
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "light");


    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme))
        document.documentElement.removeAttribute("class");
        document.documentElement.classList.add(theme);
    }, [theme]);

  return (
    <header>
        <div className="logo">
            <img src={Logo} alt="logo" />
            <span>Your To Do manager</span>
        </div>
        <div className="themeSelector">
            <span onClick={() => setTheme("light")} className={theme === "light" ? "light activeTheme" : "light"}></span>
            <span onClick={() => setTheme("medium")} className={theme === "medium" ? "medium activeTheme" : "medium"}></span>
            <span onClick={() => setTheme("dark")} className={theme === "dark" ? "dark activeTheme" : "dark"} activeTheme ></span>
            <span onClick={() => setTheme("gOne")} className={theme === "gOne" ? "gOne activeTheme" : "gOne"}></span>
        </div>
    </header>
  )
}

