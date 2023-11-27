import React, { useState } from "react";
import { data } from "./Data";
import "./style.css";
import Name from "../Name/Name";
import Card from "../Card/Card";

export default function Data() {
  const [names, setNames] = useState(dataNames);
  const [before1990, setBefore1990] = useState(getPeopleBornBefore1990(data));

  function dataNames() {
    const names = data.map((name, i) => {
      return <li key={i}>{name.name}</li>;
    });
    return names;
  }

  function bornBefore1990(person) {
    const birthYear = new Date(person.birthday).getFullYear();
    return birthYear < 1990;
  }

  function getPeopleBornBefore1990(data) {
    return data.filter(bornBefore1990);
  }

  return (
    <div>
      <div className="container">
        <div>
          <h2>Names:</h2>
          <Name name={names} />
        </div>
        <div className="before-1990">
          <h2>before 1990</h2>
          {before1990.map((item, i) => {
            return (
              <ul key={i}>
                <li>
                  <Card
                    name={item.name}
                    birthday={item.birthday}
                    favMeat={item.favoriteFoods.meats}
                    favFish={item.favoriteFoods.fish}
                  />
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}
