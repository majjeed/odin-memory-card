import { useState, useEffect } from "react";
import Card from "./Card";

export default function List({ listData }) {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [listOrder, setListOrder] = useState(null);
  //   const formsList = listData.forms;

  useEffect(() => {
    setListOrder(shuffle(listData.forms));
  }, [listData]);

  useEffect(() => {
    const newListOrder = shuffle(listData.forms);
    setListOrder(newListOrder);
  }, [currentScore, bestScore, selectedItems, listData.forms]);

  const shuffle = (array) => {
    return array
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
  };

  const changeOrder = (name) => {
    console.log(name);
    if (selectedItems.includes(name)) {
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      console.log(`Game Over your current score is ${currentScore}`);
      console.log(`The Best Score is ${bestScore}`);
      setCurrentScore(0);
      setSelectedItems([]);
    } else {
      //   let currentSelectedItems = [...selectedItems];
      setSelectedItems((prevItems) => [...prevItems, name]);
      setCurrentScore(currentScore + 1);
    }
  };

  return (
    <>
      <p>Different Forms</p>
      <p>Current Score: {currentScore}</p>
      <p>Best Score: {bestScore}</p>
      {listOrder && (
        <ul className="cardContainer">
          {listOrder.map((element) => (
            <Card
              key={element.name}
              formName={element.name}
              url={element.url}
              handleClick={changeOrder}
            />
          ))}
        </ul>
      )}
    </>
  );
}
