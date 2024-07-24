import { useState, useEffect } from "react";
import Card from "./Card";

export default function List({ listData }) {
  const formsList = listData.forms;

  return (
    <>
      <p>Different Forms</p>
      <ul>
        {formsList.map((element) => (
          <Card key={element.name} formName={element.name} url={element.url} />
        ))}
      </ul>
    </>
  );
}
