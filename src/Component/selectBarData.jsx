// Function for finding all the regions.
export function findRegions(data) {
  let allRegions = data.map((element) => {
    if (element.region != undefined) {
      return element.region;
    }
  });
  allRegions = Array.from(new Set(allRegions));
  return allRegions.sort();
}

// Function for finding all the criteria.
export function findCriteria() {
  let allCriteria = [
    "Population High to Low",
    "Population Low to High",
    "Area High to Low",
    "Area Low to High",
  ];
  return allCriteria;
}

//Function for finding all the ssubregions of the particular region.
export function findAllSubregions(data, searchRegion) {
  let allSubregions = data
    .filter(
      (element) =>
        element.region === searchRegion && element.subregion != undefined
    )
    .map((element) => element.subregion);
  return Array.from(new Set(allSubregions));
}

// Function for finding all the languages.
export function findAllLanguages(data) {
  let languages = data.map((element) => {
    if (element.languages != undefined) {
      return Object.values(element.languages);
    }
  });
  return Array.from(new Set(languages.flat()));
}
