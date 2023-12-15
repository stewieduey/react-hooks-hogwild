import React, { useState } from "react";

const HogForm = ({ onAddHog }) => {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [greased, setGreased] = useState(false);
  const [weight, setWeight] = useState("");
  const [highestMedal, setHighestMedal] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input if needed

    // Create new hog object
    const newHog = {
      name,
      specialty,
      greased,
      weight,
      'highest medal achieved': highestMedal,
      image,
    };

    // Pass new hog to parent component
    onAddHog(newHog);

    // Clear form fields
    setName("");
    setSpecialty("");
    setGreased(false);
    setWeight("");
    setHighestMedal("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" 
        value={name} 
        onChange={(e) => 
        setName(e.target.value)} />
      </label>
      <label>
        Specialty:
        <input type="text" 
        value={specialty} 
        onChange={(e) => 
        setSpecialty(e.target.value)} />
      </label>
      <label>
        Greased:
        <input type="checkbox" 
        checked={greased} 
        onChange={(e) => 
        setGreased(e.target.checked)} />
      </label>
      <label>
        Weight:
        <input type="text" 
        value={weight}
         onChange={(e) => 
         setWeight(e.target.value)} />
      </label>
      <label>
        Highest Medal Achieved:
        <input type="text"
         value={highestMedal} 
         onChange={(e) => 
         setHighestMedal(e.target.value)} />
      </label>
      <label>
        Image URL:
        <input type="text"
         value={image}
          onChange={(e) => 
          setImage(e.target.value)} />
      </label>
      <button type="submit">Add Hog</button>
    </form>
  );
};

export default HogForm;