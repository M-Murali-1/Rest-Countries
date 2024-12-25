import React, { useEffect, useState, useContext } from "react";
//import ThemeContext from './ThemeContext';
import { ThemeSwitcher } from "./ThemeContext";
const NavBar = () => {
  const toggleTheme = useContext(ThemeSwitcher);
  // const [dark,setDark] = useState(false);
  // useEffect(()=>{
  //     console.log("Clicked om the button..!");
  //     document.body.classList.toggle("dark");
  // },[dark])
  return (
    <div className="flex flex-row justify-between items-center p-6 shadow-md bg-lightelement dark:bg-darkelement text-lighttext dark:text-darktext">
      <p className="text-lg font-extrabold">Where in the world?</p>
      <button onClick={() => toggleTheme()}>
        <p className="font-semibold">Dark Mode</p>
      </button>
    </div>
  );
};

export default NavBar;
