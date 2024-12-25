import React from "react";
import { Link } from "react-router-dom";
const Backbutton = () => {
  return (
    <button className="m-5">
      <Link to={"/"}>Back</Link>
    </button>
  );
};

export default Backbutton;
