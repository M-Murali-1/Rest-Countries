import React from "react";
import { Link, useParams } from "react-router-dom";
import Individual from "./Individual";
import BorderCountries from "./BorderCountries";
import DetailComponent from "./DetailComponent";
import Backbutton from "./Backbutton";
const DetailPage = ({ data }) => {
  const { country } = useParams();
  // console.log(Array.isArray(data));
  let countryData = data.find((element) => element.name.common === country);
  // console.log(countryData);
  if (countryData === undefined) {
    return <h1>No country Found ..! </h1>;
  }
  // console.log(countryData.borders);
  let borders = countryData.borders;
  let borderCountries = [];
  if (borders !== undefined) {
    borderCountries = data
      .filter((element) => {
        if (borders.includes(element.cca3)) {
          return element;
        }
      })
      .map((element) => element.name.common);
  }
  // console.log(borders, borderCountries.sort());

  return (
    // Total container in the detail page
    <div className="text-lighttext dark:text-darktext">
      <Backbutton/>
      <DetailComponent countryData={countryData} borderCountries={borderCountries}/>
    </div>
  );
};

export default DetailPage;