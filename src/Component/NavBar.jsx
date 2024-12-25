import { useContext } from "react";
import { ThemeSwitcher } from "./ThemeContext";
const NavBar = () => {
  const toggleTheme = useContext(ThemeSwitcher);
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
