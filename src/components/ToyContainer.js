import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onDelete}) {
  return (
    <div id="toy-collection">{
      toys.map((toy) => {
        return (
          <ToyCard
        key = {toy.id}
        id = {toy.id}
        name = {toy.name}
        image = {toy.image}
        likes = {toy.likes}
        onDelete = {onDelete}
        />
        )
      })
    }</div>
  );
}

export default ToyContainer;
