import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./card.scss";

const Card = (props) => {
  
  // console.log('OVO JE KARTICA', props)
  const deleteRecipe = () => {
    fetch(
      `https://626d4fa650a310b8a34ce36c.mockapi.io/recipe/${props.obj.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(props.recipe),
      }
    )
      .then((res) => res.json())
      .then(() => props.setShouldUpdate());
  };

  
  return (
    <div className="card">
      <img src={props.obj.image} alt="meal" className="cardimg" />

      <div className="btnwrap">
        <Link to={`/singlePage/${props.obj.id}`}>
          <button
            onClick={() => props.setSelectedRecipe(props.obj.id)}
            className="openbtn"
          ></button>
        </Link>

        <p className="cardmealtitle">~{props.obj.meal}~</p>

        <button
          onClick={(e) => {
            // e.stopPropagation();
            // e.preventDefault();
            // deleteRecipe();
            props.setSelectedRecipe(props.obj.id)
            props.changeConfirmModal("open")
          }}
          className="closeBtn"
        ></button>
      </div>
    </div>
  );
};

export default Card;
