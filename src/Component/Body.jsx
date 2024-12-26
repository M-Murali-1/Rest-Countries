import React, { useState } from "react";
import Searchbar from "./Searchbar";
import Selectbar from "./Selectbar";
import filteringData from "./FilteringData";
import Allcountries from "./Allcountries";
const Body = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchRegion, setSearchRegion] = useState("Filter by Region");
  const [searchSubregion, setSearchSubregion] = useState("Filter By Subregion");
  const [searchCriteria, setSearchCriteria] = useState("Filter by Criteria");
  const [searchLanguage,setSearchLanguage]=useState("Filter by Language");
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
      (element) => element.region === searchRegion && element.subregion != undefined
    )
    .map((element) => element.subregion);
  allSubregions = Array.from(new Set(allSubregions));
  allSubregions.unshift("Filter By Subregion");
  function handleSetRegion(value) {
    setSearchRegion(value);
    setSearchSubregion("Filter By Subregion");
  }
  let languages = data.map((element)=>{
    if(element.languages!=undefined) {
      return Object.values(element.languages);
    }
  })
  let allLanguages = Array.from(new Set(languages.flat()));
  //console.log(allLanguages.sort());
  allLanguages.unshift("Filter by Language");
  let updated = filteringData(data, searchQuery, searchRegion, searchSubregion, searchCriteria,searchLanguage);

  
  return (
    <div className="m-5">
      <div className="sm:flex sm:justify-between">
        <Searchbar
          country={searchQuery}
          setSearchQuery={(value) => setSearchQuery(value)}
        />
        <Selectbar
          options={allRegions}
          setOptions={(value) => handleSetRegion(value)}
        />
        {allSubregions.length > 1 ? (
          <Selectbar
            options={allSubregions}
            setOptions={(value) => setSearchSubregion(value)}
          />
        ) : searchRegion === "Filter by Region" ? (
          <></>
        ) : (
          <p className="text-lighttext dark:text-darktext px-3">
            No Subregions Found..!
          </p>
        )}
        <Selectbar
          options={allCriteria}
          setOptions={(value) => setSearchCriteria(value)}
        />
        <Selectbar options={allLanguages} setOptions={(value)=>setSearchLanguage(value)}/>
      </div>
      <Allcountries data={updated} />
    </div>
  );
};

export default Body;
