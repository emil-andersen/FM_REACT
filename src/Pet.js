import React from "react";

export default function Pet({ navn, dyr, race }) {
  return (
    <div>
      <h1>{navn}</h1>
      <h2>{dyr}</h2>
      <h2>{race}</h2>
    </div>
  );
}
