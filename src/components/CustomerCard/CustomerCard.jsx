import React from "react";
// import { Avatar } from "../../components/Avatar";
// import { IconFromTablerIo } from "../../icons/IconFromTablerIo";
// import { IconFromTablerIo1 } from "../../icons/IconFromTablerIo1";
// import { IconFromTablerIo2 } from "../../icons/IconFromTablerIo2";
// import { IconFromTablerIo3 } from "../../icons/IconFromTablerIo3";
// import { IconFromTablerIo5 } from "../../icons/IconFromTablerIo5";
// import { IconTablerIconMessageCircle } from "../../icons/IconTablerIconMessageCircle";
import "./CustomerCard.css";

function CustomerCard() {
  return (
    <div className="widget">
      <div className="heading">
        <div className="text-wrapper">Customers</div>
        <div className="frame">
          <p className="sort-by-newest">
            <span className="span">Sort by </span>
            <span className="text-wrapper-2">Newest</span>
          </p>
          {/* <IconFromTablerIo5 className="icon-from-tabler-io" /> */}
        </div>
      </div>
      <div className="list">
        <div className="customer">
          <img src="./Avatar1.svg" alt="user1" />
          <div className="div">
            <div className="text-wrapper-3">Chris Friedkly</div>
            <div className="text-wrapper-4">Supermarket Villanova</div>
          </div>
        </div>
        <div className="customer">
          <img src="./Avatar2.svg" alt="user1" />

          <div className="div">
            <div className="text-wrapper-3">Maggie Johnson</div>
            <div className="text-wrapper-4">Oasis Organic Inc.</div>
          </div>
        </div>
        <div className="customer">
          <img src="./Avatar3.svg" alt="user1" />

          <div className="div">
            <div className="text-wrapper-3">Gael Harry</div>
            <div className="text-wrapper-4">New York Finest Fruits</div>
          </div>
        </div>
        <div className="customer">
          <img src="./4.png" alt="user1" />

          <div className="div">
            <div className="text-wrapper-3">Jenna Sullivan</div>
            <div className="text-wrapper-4">Walmart</div>
          </div>
        </div>
      </div>
      <button className="button">
        <div className="frame">
          <div className="text-wrapper-5">All customers</div>
          {/* <IconFromTablerIo className="icon-from-tabler-io" /> */}
        </div>
      </button>
    </div>
  );
}

export default CustomerCard;
