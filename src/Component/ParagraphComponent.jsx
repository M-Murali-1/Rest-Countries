const ParagraphComponent = ({ title, content }) => {
  if (content == "undefined") {
    content = "NA";
  }
  return (
    <p className="text-sm font-semibold">
      {title} : <span className="font-light">{content}</span>
    </p>
  );
};

export default ParagraphComponent;
