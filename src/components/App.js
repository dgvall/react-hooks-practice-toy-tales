import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(res => res.json())
      .then(data => setToys(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleDelete(toyID) {
    const filteredToys = toys
      .filter((toy) => toy.id !== toyID)
    
    setToys(filteredToys)

  }

  function handleAddToy(toyObj) {
    const updatedToy = [...toys, toyObj]
    setToys(updatedToy)
  }

  const displayedToys = toys

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy = {handleAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
      toys = {displayedToys}
      onDelete = {handleDelete}
      />
    </>
  );
}

export default App;
