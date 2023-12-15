import React, { useState } from "react";
import Nav from "./Nav";
import Hog from "./Hog";
import HogForm from "./HogForm";

import hogsData from "../porkers_data";

const App = () => {
  const [hogs, setHogs] = useState(hogsData);
  const [filterGreased, setFilterGreased] = useState(false);
  const [sortType, setSortType] = useState("name");

  const filteredHogs = hogs.filter((hog) => !filterGreased || hog.greased);

  const sortedHogs = filteredHogs.sort((hogA, hogB) => {
    if (sortType === "name") {
      return hogA.name.localeCompare(hogB.name);
    } else if (sortType === "weight") {
      return hogA.weight - hogB.weight;
    }
    return 0;
  });

  return (
    <div className="App">
      <Nav />
      <label>
        <input
          type="checkbox"
          checked={filterGreased}
          onChange={(e) => setFilterGreased(e.target.checked)}
        />
        Filter Greased Hogs
      </label>
      <label>
        Sort by:
        <select onChange={(e) => setSortType(e.target.value)}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </label>
      <ul className="ui grid container">
        {sortedHogs.map((hog) => (
          <Hog key={hog.name} hog={hog} />
        ))}
      </ul>
    </div>
  );
};

export default App;