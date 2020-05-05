import React, { useState } from "react";
import "./styles.css";
function Name({ name, onNameChange }) {
  return (
    <div>
      <label>Name:</label>
      <input value={name} onChange={onNameChange} />
    </div>
  );
}

function FavoriteAnimail({ animal, onAnimalChange }) {
  return (
    <div>
      <label>Favorite Animal: </label>
      <input value={animal} onChange={onAnimalChange} />
    </div>
  );
}

function Display({ name, animal }) {
  return <div>{`Hey ${name}, your favorite is ${animal}`}</div>;
}

export default function App() {
  const [name, setName] = useState("");
  const [animal, setAnimal] = useState("");

  return (
    <form>
      <Name name={name} onNameChange={event => setName(event.target.value)} />
      <FavoriteAnimail
        animal={animal}
        onAnimalChange={event => setAnimal(event.target.value)}
      />
      <Display name={name} animal={animal} />
    </form>
  );
}
