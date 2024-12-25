import React from "react";

const ParagraphComponent = ({title,content}) => {
    if(content=="undefined") {
        content="NA";
    }
    console.log(title);
    
  return (
    <p className="text-sm font-semibold">
      {title} :{" "}
      <span className="font-light">
        {content}
      </span>
    </p>
  );
};

export default ParagraphComponent;
