const Selectbar = ({ options, setOptions }) => {
  return (
    <div className="my-5 sm:mt-0">
      <select className="w-full sm:w-auto shadow-md rounded p-3 bg-lightelement dark:bg-darkelement text-lighttext dark:text-darktext" onChange={(e) => setOptions(e.target.value)}>
          {/* <option></option> */}
          {options.map((element) => (
            <option value={element} key={element}>
              {element}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Selectbar;
