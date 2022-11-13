import React, {useState} from "react";

function ToyCard({id, name, image, likes, onDelete}) {
  const [liked, setLiked] = useState(likes)

  function handleDelete() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(() => onDelete(id))
  }

  function handleLike() {
    setLiked(() => liked + 1)

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: liked + 1
      }),
    })
      .then(res => res.json())
      .then(data => (data.likes))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{liked} Likes </p>
      <button onClick = {handleLike} className="like-btn">Like {"<3"}</button>
      <button onClick = {handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
