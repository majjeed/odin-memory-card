import { useState, useEffect } from "react";

export default function Card({ formName, url }) {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(url);
      let responseBody = await response.json();
      setItem(responseBody);
    };

    fetchData();
  }, [url]);

  const handleClick = () => {
    console.log(item.name);
  };

  return (
    <div onClick={handleClick}>
      {item && <p>{item.name}</p>}
      <p>
        Form Name: {formName} URL: {url}
      </p>
    </div>
  );
}
