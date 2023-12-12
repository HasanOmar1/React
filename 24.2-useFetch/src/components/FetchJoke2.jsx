import React from "react";
import useFetch from "../CustomHooks/useFetch";

export default function FetchJoke2() {
  const [data, isLoading, error] = useFetch(
    "https://official-joke-api.appspot.com/random_joke"
  );
  console.log(data);
  return (
    <div>
      <h1>Data from Postman random Jokes api</h1>
      <h2>{data?.setup}</h2>
      <h2>{data?.punchline}</h2>
    </div>
  );
}
