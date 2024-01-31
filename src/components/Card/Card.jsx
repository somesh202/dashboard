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

        <span className="link">
          {props.link}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
          >
            <path
              d="M2.91666 7.11164H11.0833M11.0833 7.11164L8.75 9.44497M11.0833 7.11164L8.75 4.77831"
              stroke="#734A00"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </>
  );
}

export default Card;
