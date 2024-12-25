import { useState, useEffect } from "react";
import NavBar from "./Component/NavBar";
import Body from "./Component/Body";
import { Routes, Route } from "react-router-dom";
import DetailPage from "./Component/DetailPage";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setData(data);
        console.log(data[0]);
      } catch (err) {
        console.log("error occured..!");
      }
    };
    fetchData();
  }, []);
  return (
    <div className="bg-lightbg dark:bg-darkbg min-h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<Body data={data} />} />
        <Route path="/:country" element={<DetailPage data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
