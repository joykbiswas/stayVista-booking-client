// import Container from "../Shared/Container";

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Cards = ({ room }) => {
  // console.log(room);
  return (
    <Link to={`/room/${room._id}`} className="col-span-1 cursor-pointer group">
      <div className=" flex flex-col gap-2 w-full border rounded-xl p-2 shadow-inner ">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl ">
          <img
            className="object-cover h-full w-full group-hover:scale-110 transition"
            src={room?.image}
            alt="room"
          />
          <div className="absolute top-3 right-3"></div>
        </div>
        <div className="">
          <h2 className="font-semibold text-lg">{room?.location}</h2>
          <p className="font-light text-neutral-500"> 5. night</p>
          <p className="font-semibold "> $ {room?.price} night</p>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
