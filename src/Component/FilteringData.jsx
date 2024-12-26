function FilteringData(data, country, region, subregion, criteria,language) {
  let updated;
  // console.log(language);
  
  if (country === "") {
    updated = data;
  } else {
    updated = data.filter((element) => {
      let commonName = element.name.common.toLowerCase();
      country = country.toLowerCase();
      if (commonName.includes(country)) {
        console.log(commonName);
        return element;
      }
    });
  }
 // console.log("In the filter ",country,region,subregion,criteria,language);
 if(language!=="Filter by Language") {
    console.log(language);
    updated = updated .filter((element)=>{
      if(element.languages!=undefined) {
      let presentLanguages = Object.values(element.languages);
      if(presentLanguages.includes(language)) {
        return element;
      }
    }
    })
  }
  
  if (region !== "Filter by Region") {
    updated = updated.filter((element) => element.region === region);
  }
  if (subregion !== "Filter By Subregion") {
    updated = updated.filter((element) => element.subregion === subregion);
  }
  switch (criteria) {
    case "Population High to Low":
      updated = updated.sort((a, b) => b.population - a.population);
      break;
    case "Population Low to High":
      updated = updated.sort((a, b) => a.population - b.population);
      break;
    case "Area High to Low":
      updated = updated.sort((a, b) => b.area - a.area);
      break;
    case "Area Low to High":
      updated = updated.sort((a, b) => a.area - b.area);
      break;
  }

  return updated;
}

export default FilteringData;
