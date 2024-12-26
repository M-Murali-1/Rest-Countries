const Searchbar = ({ country, setSearchQuery }) => {
  return (
    <div>
      <div className="relative shadow-md  rounded-lg text-lighttext dark:text-darktext ">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-search"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
        <input
          type="text"
          value={country}
          className="ps-10 p-2.5 border-0 w-full rounded-md text-lighttext dark:text-darktext dark:bg-darkelement"
          placeholder="Search for a country..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Searchbar;
