import React from "react";
import { Tag } from "../Tag/Tag";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./card.css";
import { StarRating } from "../StarRating/StarRating";

export const Card = ({
  type,
  heading,
  subtext,
  description,
  tags,
  actionBtnText,
  performAction,
  bgImage,
  badge,
  isLiked,
  onClickLike,
  rating,
  colorRating,
  colorTag
}) => {
  const cardHero = () => {
    return (
      <div
        className="shoto-card-hero"
        style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
      >
        <div className="overlay">
          {heading && <div className="heading">{heading}</div>}
          {subtext && <div className="subtext">{subtext}</div>}
          {description && <div className="description">{description}</div>}
          {tags !== undefined && tags.length !== 0 && (
            <div className="container-tags">
              {tags.map((item) => (
                <Tag key={`tag-${item}`} color="white" borderColor="white">
                  {item}
                </Tag>
              ))}
            </div>
          )}
          {actionBtnText && (
            <span className="btn-action" onClick={() => performAction()}>
              {actionBtnText}
            </span>
          )}
        </div>
      </div>
    );
  };

  const cardShowcase = () => {
    return (
      <div className="shoto-card-showcase">
        <div>
          <img src={bgImage} className="img-product" alt="product" />
          <div className="top-row">
            <div className="container-rating">
              <StarRating rating={rating} color={`${colorRating?colorRating:"#FDCC0D"}`}/>
            </div>
            <div className="container-heart" onClick={() => onClickLike()}>
              {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
            </div>
          </div>
          <div className="heading">{heading}</div>
        </div>
        <div>
          <div className="subtext">{subtext}</div>
          {tags !== undefined && tags.length !== 0 && (
            <div className="container-tags">
              {tags.map((item) => (
                <Tag key={`tag-${item}`} color={`${colorTag?colorTag:"#000"}`} borderColor={`${colorTag?colorTag:"#000"}`}>
                  {item}
                </Tag>
              ))}
            </div>
          )}
        </div>
        {badge && <span className="badge">{badge}</span>}
      </div>
    );
  };

  if (type === "hero") return cardHero();
  else return cardShowcase();
};
