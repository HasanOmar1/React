import { useState, useEffect, useRef } from "react";

export default function FavoriteColor() {
  const [favoriteColor, setFavoriteColor] = useState("Green");
  const divWithId = useRef();

  //   const div = document.querySelector("#div-with-id");

  useEffect(() => {
    setTimeout(() => {
      setFavoriteColor("SkyBlue");
    }, 1000);
  }, [divWithId]);

  return (
    <div>
      <h1>My fav color is : {favoriteColor}</h1>
      <div id="div-with-id" ref={divWithId}></div>
    </div>
  );
}
