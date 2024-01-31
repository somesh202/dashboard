/* eslint-disable react/prop-types */
import * as React from "react";
import "./Card.css";

function Card(props) {
  return (
    <>
      <div className="card">
        <h2 className="title">{props.title}</h2>
        <span className="metric">{props.metric} %</span>
        <p className="card-cont">{props.content}</p>

        <span className="link">{props.link}</span>
      </div>
    </>
  );
}

export default Card;
