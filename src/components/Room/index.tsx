import React from "react";
import defaultImg from "../../utils/images/room-1.jpeg";
import { Link } from "react-router-dom";
import { RoomObject } from "../../Types/Types";

const index = ({ name, slug, images, price }: RoomObject) => {
  // console.log(props);
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
};

export default index;
