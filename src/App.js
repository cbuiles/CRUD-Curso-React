import React from "react";
import CrudApp from "./components/CrudApp";
import CrudApi from "./components/CrudApi";
import SongSearch from "./components/SongSearch";
import SelectAnidados from "./components/SelectAnidados";

function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <SelectAnidados />
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
      <hr />
    </>
  );
}

export default App;
