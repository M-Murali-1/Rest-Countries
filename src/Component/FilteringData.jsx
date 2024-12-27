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

//Function for filtering the data based on the name
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

//Function for filtering by the language
function filterByLanguage(searchLanguage) {
  if (searchLanguage !== "") {
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

//Function for filtering by the region.
function filterByRegion(searchRegion) {
  if (searchRegion !== "") {
    updated = updated.filter((element) => element.region === searchRegion);
  }
}

//Function for filtering based on the subregion
function filterBySubregion(searchSubregion) {
  if (searchSubregion !== "") {
    updated = updated.filter(
      (element) => element.subregion === searchSubregion
    );
  }
}

//Function for filtering based on the criteria
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

export default filteringData;
