import { useState, useEffect } from "react";

export default function Card({ formName, url, handleClick }) {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(url);
      let responseBody = await response.json();
      setItem(responseBody);
    };

    fetchData();
  }, [url]);

  const handleItemClick = () => {
    if (item) {
      handleClick(item.name);
    }
  };

  return (
    <div className="card" onClick={handleItemClick}>
      {item && <p>{item.name}</p>}
      {/* <p>
        Form Name: {formName} URL: {url}
      </p> */}
      {item && <img src={item.sprites.front_default} />}
    </div>
  );
}
