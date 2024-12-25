import React from "react";
import { useNavigate } from "react-router-dom";
function BorderCountries({ countries }) {
  let navigate = useNavigate();
  return (
    <>
      {countries.map((element) => (
        <button
          className="m-[3px] ms-2 shadow-lg px-2 p-1 text-sm bg-lightelement dark:bg-darkelement text-lighttext dark:text-darktext"
          key={element}
          value="element"
          onClick={() => navigate(`/${element}`)}
        >
          {element}
        </button>
      ))}
    </>
  );
}

export default BorderCountries;
