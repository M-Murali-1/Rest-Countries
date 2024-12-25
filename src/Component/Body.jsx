import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import Selectbar from "./Selectbar";
import FilteringData from "./FilteringData";
import Allcountries from "./Allcountries";
const Body = ({ data }) => {
  const [country, setCountry] = useState("");
  //const [data, setData] = useState([]);
  const [region, setRegion] = useState("Filter by Region");
  const [subregion, setSubregion] = useState("Filter By Subregion");
  const [criteria, setCriteria] = useState("Filter by Criteria");
  let allRegions = [
    "Filter by Region",
    "Africa",
    "Americas",
    "Antarctic",
    "Asia",
    "Europe",
    "Oceania",
  ];
  let allCriteria = [
    "Filter by Criteria",
    "Population High to Low",
    "Population Low to High",
    "Area High to Low",
    "Area Low to High",
  ];
  console.log(country, region, subregion);
  let allSubregions = data
    .filter(
      (element) => element.region === region && element.subregion != undefined
    )
    .map((element) => element.subregion);
  // console.log(allSubregions);
  allSubregions = Array.from(new Set(allSubregions));
  allSubregions.unshift("Filter By Subregion");
  console.log(allSubregions);
  let updated = FilteringData(data, country, region, subregion, criteria);
  console.log("Updated value:", updated[0]);

  return (
    <div className="m-5">
      <div className="sm:flex sm:justify-between">
      <Searchbar country={country} setCountry={(value) => setCountry(value)} />
      <Selectbar
        options={allRegions}
        setOptions={(value) => setRegion(value)}
      />
      {allSubregions.length > 1 ? (
        <Selectbar
          options={allSubregions}
          setOptions={(value) => setSubregion(value)}
        />
      ) : region === "Filter by Region" ? (
        <></>
      ) : (
        <p className="text-lighttext dark:text-darktext px-3">
          No Subregions Found..!
        </p>
      )}
      <Selectbar
        options={allCriteria}
        setOptions={(value) => setCriteria(value)}
      />
      </div>
      <Allcountries data={updated} />
    </div>
  );
};

export default Body;
