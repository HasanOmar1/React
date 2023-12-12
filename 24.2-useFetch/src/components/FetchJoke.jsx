import React from "react";
import useFetch from "../CustomHooks/useFetch";

export default function FetchJoke() {
  const [data, isLoading, error] = useFetch(
    "https://api.chucknorris.io/jokes/random"
  );
  //   console.log(data);
  return (
    <div>
      <h1>Data from Chuck Norris Jokes</h1>
      <h3>{data?.value}</h3>
    </div>
  );
}
