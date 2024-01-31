/* eslint-disable react/prop-types */
import * as React from "react";
import "./MiniCard.css";

function MiniCard(props) {
  return (
    <>
      <div className="mini-card">
        <h2 className="title">{props.title}</h2>
        <img src={props.url} alt="" />
        <span className="date">{props.date}</span>
        <p className="content">{props.content}</p>

        <span className="link">{props.link}</span>
      </div>
    </>
  );
}

export default MiniCard;
