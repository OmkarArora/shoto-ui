import React from "react";
import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im";

export const StarRating = ({ rating, color }) => {
  const maxStars = 5;
  const calculateStars = () => {
    let [whole, part] = `${parseFloat(rating)}`.split(".");
    let ratingStars = [];
    for (let i = 0; i < whole; i++) ratingStars.push("full");
    if (part) {
		ratingStars.push("half");
      for (let i = 0; i < maxStars - whole - 1; i++) ratingStars.push("empty");
    } else {
      for (let i = 0; i < maxStars - whole; i++) ratingStars.push("empty");
    }
	return <>
		{ratingStars.map((item,index) => {
			if(item==="half") return <ImStarHalf key={`half${index}rating`}/>
			else if(item==="full") return <ImStarFull  key={`full${index}rating`}/>
			else return <ImStarEmpty  key={`empty${index}rating`}/>
		})}
	</>
  };
  return (
    <div className="shoto-rating-container" style={{ color: color }}>
      {calculateStars()}
    </div>
  );
};
