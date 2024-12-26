import { Link } from "react-router-dom";
const Backbutton = () => {
  return (
    <button className="m-5 bg-lightelement dark:bg-darkelement shadow-xl text-lighttext dark:text-darktext px-2 font-medium">
      <Link to={"/"} className="flex items-center">
      <p className="text-lg ">&#x2190; Back</p>
     
      </Link>
    </button>
  );
};

export default Backbutton;
