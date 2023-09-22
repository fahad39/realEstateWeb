import React from "react";
import "./PropertyCard.css";
import { AiFillHeart } from "react-icons/ai";
import { truncate } from "lodash";

const PropertyCard = ({ card }) => {
  console.return(
    <div className="flexColStart r-card">
      <AiFillHeart sixe={24} color="white" />
      <img src={card.image} alt="home" />
      <span className="secondaryText r-price">
        <span style={{ color: "orange" }}>$</span>
        <span>{card.price}</span>
      </span>
      <span className="primaryText">
        {truncate(card.title, { length: 15 })}
      </span>
      <span className="secondaryText">
        {truncate(card.description, { length: 80 })}
      </span>
    </div>
  );
};

export default PropertyCard;
