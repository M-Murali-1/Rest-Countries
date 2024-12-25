import React from "react";
import ParagraphComponent from "./ParagraphComponent";
const DetailPageData = ({ countryData }) => {
  let languages =
    countryData.languages === undefined
      ? ["NA"]
      : Object.values(countryData.languages);
  let currencies =
    countryData.currencies === undefined
      ? ["NA"]
      : Object.keys(countryData.currencies);
  return (
    <div className="flex flex-col sm:flex-row w-auto">
      {/* Container 1 */}
      <div className="flex flex-col sm:me-4 gap-2 sm:w-1/2 w-full">
        <ParagraphComponent
          title="Native Name"
          content={`${countryData.population.toLocaleString("en-US")}`}
        />
        <ParagraphComponent
          title="Population"
          content={`${countryData.population.toLocaleString("en-US")}`}
        />
        <ParagraphComponent title="Region" content={`${countryData.region}`} />
        <ParagraphComponent
          title="Sub Region"
          content={`${countryData.subregion}`}
        />
        <ParagraphComponent
          title="Capital"
          content={`${countryData.capital}`}
        />
      </div>
      {/* Container 2 */}
      <div className="flex flex-col mt-6 sm:mt-0 gap-2 sm:w-1/2 w-full">
        <ParagraphComponent
          title="Top Level Domain"
          content={`${countryData.tld.join(",")}`}
        />
        <ParagraphComponent
          title="Currencies"
          content={`${currencies.join(",")}`}
        />
        <ParagraphComponent
          title="Languages:"
          content={`${languages.join(",")}`}
        />
      </div>
    </div>
  );
};

export default DetailPageData;
