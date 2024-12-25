import React from "react";

const DetailPageImage = ({countryData}) => {
  return (
    <div className="md:w-1/3 sm:w-2/5 sm:h-[220px] md:h-80">
      <img className="w-full h-full" src={countryData.flags.png} />
    </div>
  );
};

export default DetailPageImage;
