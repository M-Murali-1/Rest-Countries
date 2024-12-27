import { useState } from "react";
import Searchbar from "./Searchbar";
import Selectbar from "./Selectbar";
import filteringData from "./FilteringData";
import Allcountries from "./Allcountries";
import { findRegions, findCriteria } from "./selectBarData";
import { findAllSubregions, findAllLanguages } from "./selectBarData";

const Body = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchRegion, setSearchRegion] = useState("");
  const [searchSubregion, setSearchSubregion] = useState("");
  const [searchCriteria, setSearchCriteria] = useState("");
  const [searchLanguage, setSearchLanguage] = useState("");

  let allRegions = findRegions(data);
  let allCriteria = findCriteria();
  let allSubregions = findAllSubregions(data, searchRegion);
  let allLanguages = findAllLanguages(data);
  let updated = filteringData(
    data,
    searchQuery,
    searchRegion,
    searchSubregion,
    searchCriteria,
    searchLanguage
  );

  return (
    <div className="m-5">
      <div className="sm:flex sm:justify-between">
        <Searchbar
          country={searchQuery}
          setSearchQuery={(value) => setSearchQuery(value)}
        />
        <Selectbar
          options={allRegions}
          setOptions={(value) => {
            setSearchRegion(value);
            setSearchSubregion("");
          }}
          Default={"Filter By Region"}
        />
        {allSubregions.length !== 0 ? (
          <Selectbar
            options={allSubregions}
            setOptions={(value) => setSearchSubregion(value)}
            Default={"Filter By Subregion"}
          />
        ) : searchRegion === "" ? (
          <></>
        ) : (
          <p className="text-lighttext dark:text-darktext px-3">
            No Subregions Found..!
          </p>
        )}
        <Selectbar
          options={allCriteria}
          setOptions={(value) => setSearchCriteria(value)}
          Default={"Filter by Criteria"}
        />
        <Selectbar
          options={allLanguages}
          setOptions={(value) => setSearchLanguage(value)}
          Default={"Filter by Language"}
        />
      </div>
      <Allcountries data={updated} />
    </div>
  );
};

export default Body;
