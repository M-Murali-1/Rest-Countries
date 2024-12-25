import BorderCountries from "./BorderCountries";
import DetailPageImage from "./DetailPageImage";
import DetailPageData from "./DetailPageData";
const DetailComponent = ({ countryData, borderCountries }) => {
  return (
    <div className="flex md:flex-row sm:flex-row  mx-7 flex-col md:mt-20 sm:mt-20 md:ms-10  sm:ms-5 md:gap-10 sm:gap=0">
      {/* Contianer for the purpose of the image in the detail page */}
      <DetailPageImage countryData={countryData} />
      <div className="md:py-7 md:w-1/2 sm:px-3 sm:py-2">
        {/* Printing the name of the country */}
        <div className="my-5 sm:mb-5">
          <p className="text-2xl font-extrabold">{countryData.name.common}</p>
        </div>
        {/* HTML For pritnitng the data in the detail page */}

        <DetailPageData countryData={countryData} />
        {/* Printing the Border Details */}

        <p className="text-base font-semibold my-5">
          Border Countries:{" "}
          <span className="font-light">
            {borderCountries.length === 0 ? (
              "No Border Countries"
            ) : (
              <BorderCountries countries={borderCountries} />
            )}
          </span>
        </p>
      </div>
    </div>
  );
};

export default DetailComponent;
