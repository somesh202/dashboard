import React from "react";
import MenuButtons from "./MenuButtons";
import "./CustomerCard.css";

function CustomerCard() {
  // document.querySelector(".frame-2")
  return (
    <div className="widget">
      <div className="heading">
        <div className="text-wrapper">Customers</div>
        <div className="frame">
          <p className="sort-by-newest">
            <span className="span">Sort by </span>
            <span className="text-wrapper-2">Newest</span>
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
          >
            <path
              d="M3.5 5.86163L7 9.36163L10.5 5.86163"
              stroke="#7D7D7D"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="list">
        <div className="customer">
          <img src="./Avatar1.svg" alt="user1" />
          <div className="div">
            <div className="text-wrapper-3">Chris Friedkly</div>
            <div className="text-wrapper-4">Supermarket Villanova</div>
          </div>
          <MenuButtons />
        </div>
        <div className="customer">
          <img src="./Avatar2.svg" alt="user1" />

          <div className="div">
            <div className="text-wrapper-3">Maggie Johnson</div>
            <div className="text-wrapper-4">Oasis Organic Inc.</div>
          </div>
          <MenuButtons />
        </div>
        <div className="customer">
          <img src="./Avatar3.svg" alt="user1" />

          <div className="div">
            <div className="text-wrapper-3">Gael Harry</div>
            <div className="text-wrapper-4">New York Finest Fruits</div>
          </div>
          <MenuButtons />
        </div>
        <div className="customer">
          <img src="./4.png" alt="user1" />

          <div className="div">
            <div className="text-wrapper-3">Jenna Sullivan</div>
            <div className="text-wrapper-4">Walmart</div>
          </div>
          <MenuButtons />
        </div>
      </div>
      <button className="button">
        <div className="frame">
          <div className="text-wrapper-5">All customers</div>
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
          </svg>{" "}
        </div>
      </button>
    </div>
  );
}

export default CustomerCard;
