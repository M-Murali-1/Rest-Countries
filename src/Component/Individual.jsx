import React from "react";
import { useNavigate } from "react-router-dom";
import ParagraphComponent from "./ParagraphComponent";
const Individual = ({ country }) => {
  const navigate = useNavigate();
  return (
    <div
      className="mx-4 bg-lightelement dark:bg-darkelement shadow-xl rounded-lg text-lighttext dark:text-darktext"
      onClick={() => navigate(`/${country.name.common}`)}
    >
      <div className="w-full md:h-[250px] h-[200px] overflow-hidden rounded-t-lg">
        <img
          className="w-full h-full"
          src={country.flags.png}
          alt={`The flag of ${country.name.common}`}
        ></img>
      </div>
      <div className="flex flex-col gap-1 m-5">
        <p className="text-lg font-extrabold">{country.name.common}</p>
        <ParagraphComponent
          title="Population"
          content={`${country.population.toLocaleString("en-US")}`}
        />
        <ParagraphComponent title="Region" content={`${country.region}`} />
        <ParagraphComponent title="Capital" content={`${country.capital}`} />
      </div>
    </div>
  );
};

export default Individual;
