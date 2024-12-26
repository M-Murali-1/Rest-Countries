let updated;
function filteringData(
  data,
  searchQuery,
  searchRegion,
  searchSubregion,
  searchCriteria,
  searchLanguage
) {
  filterByQuery(searchQuery, data);
  filterByLanguage(searchLanguage);
  filterByRegion(searchRegion);
  filterBySubregion(searchSubregion);
  filterByCriteria(searchCriteria);
  return updated;
}

function filterByQuery(searchQuery, data) {
  searchQuery = searchQuery.toLowerCase();
  if (searchQuery !== "") {
    updated = data.filter((element) => {
      let commonName = element.name.common.toLowerCase();
      if (commonName.includes(searchQuery)) {
        return element;
      }
    });
  } else {
    updated = data;
  }
}

function filterByLanguage(searchLanguage) {
  if (searchLanguage !== "Filter by Language") {
    updated = updated.filter((element) => {
      if (element.languages != undefined) {
        let presentLanguages = Object.values(element.languages);
        if (presentLanguages.includes(searchLanguage)) {
          return element;
        }
      }
    });
  }
}

function filterByRegion(searchRegion) {
  if (searchRegion !== "Filter by Region") {
    updated = updated.filter((element) => element.region === searchRegion);
  }
}

function filterBySubregion(searchSubregion) {
  if (searchSubregion !== "Filter By Subregion") {
    updated = updated.filter(
      (element) => element.subregion === searchSubregion
    );
  }
}

function filterByCriteria(searchCriteria) {
  switch (searchCriteria) {
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
}
console.log("Hello");

export default filteringData;
