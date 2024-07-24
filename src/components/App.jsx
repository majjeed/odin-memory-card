import { useEffect, useState } from "react";
// import reactLogo from "../assets/react.svg";
// import viteLogo from "/vite.svg";
import "../styles/App.css";
import List from "./List";

function App() {
  // const [count, setCount] = useState(0);
  const [listData, setListData] = useState(null);

  const dataUrl = "https://pokeapi.co/api/v2/pokemon/unown/";

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(dataUrl);
      let responseBody = await response.json();
      setListData(responseBody);
    };

    fetchData();
  }, []);

  // const data = async () => {
  //   let response = await fetch(dataUrl);
  //   let responseBody = await response.json();
  //   return responseBody;
  // };

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {listData && <List listData={listData} />}
    </>
  );
}

export default App;
