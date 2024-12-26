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
  const [language,setLanguage]=useState("Filter by Language");
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
  let allSubregions = data
    .filter(
      (element) => element.region === region && element.subregion != undefined
    )
    .map((element) => element.subregion);
  allSubregions = Array.from(new Set(allSubregions));
  allSubregions.unshift("Filter By Subregion");
  function handleSetRegion(value) {
    setRegion(value);
    setSubregion("Filter By Subregion");
  }
  let languages = data.map((element)=>{
    if(element.languages!=undefined) {
      return Object.values(element.languages);
    }
  })
  let allLanguages = Array.from(new Set(languages.flat()));
  console.log(allLanguages.sort());
  allLanguages.unshift("Filter by Language");
  let updated = FilteringData(data, country, region, subregion, criteria,language);

  
  return (
    <div className="m-5">
      <div className="sm:flex sm:justify-between">
        <Searchbar
          country={country}
          setCountry={(value) => setCountry(value)}
        />
        <Selectbar
          options={allRegions}
          setOptions={(value) => handleSetRegion(value)}
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
        <Selectbar options={allLanguages} setOptions={(value)=>setLanguage(value)}/>
      </div>
      <Allcountries data={updated} />
    </div>
  );
};

export default Body;
