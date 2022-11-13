import React, {useState} from "react";

function ToyForm({onAddToy}) {
  const [name, setName] = useState("")
  const [img, setImg] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    const newToy = {
      name: name,
      image: img,
      likes: 0,
    }

    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy)
    })
      .then(res => res.json())
      .then(data => onAddToy(data))
  }

  return (
    <div className="container">
      <form onSubmit = {handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value = {name}
        />
        <br />
        <input onChange = {(e) => setImg(e.target.value)}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value = {img}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
