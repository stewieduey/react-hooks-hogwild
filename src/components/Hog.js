import React, { useState } from "react";
import "./Hog.css";

const Hog = ({ hog }) => {
  const [isHidden, setIsHidden] = useState(false);

  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="ui eight wide column pigTile">
      <div className="hog-image-container">
        <img src={hog.image} alt={hog.name} className="hog-image" />
      </div>
      <h3>{hog.name}</h3>
      <button onClick={handleClick}>Toggle Details</button>
      {!isHidden && (
        <div>
          <p>Specialty: {hog.specialty}</p>
          <p>Greased: {hog.greased ? "Yes" : "No"}</p>
          <p>Weight: {hog.weight}</p>
          <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
        </div>
      )}
      <button onClick={() => setIsHidden(!isHidden)}>
        {isHidden ? "Show Hog" : "Hide Hog"}
      </button>
    </div>
  );
};

export default Hog;