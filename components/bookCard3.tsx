import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import HeartSelected from "../assets/heart.png";
import HeartUnselected from "../assets/heart2.png";
import Like from "../assets/like.svg";
interface Props {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
  likes: number;
}
const BookCard: NextPage<Props> = (props) => {
  let [favourite, setFavourite] = useState(false);
  return (
    <a
      href={"/product2/" + props.id}
      key={props.id}
      className="max-w-sm bg-white rounded overflow-hidden shadow-lg w-1/2 cursor-pointer"
    >
      <img className="h-48 mr-auto ml-auto" src={props.image} alt="" />

      <div className="px-6  mb-6">
        <div className="flex justify-between">
          <div className="font-bold text-xl mb-2 flex items-center ">
            <p>{props.likes}</p>
            <Image src={Like} height="24" className="ml-2" alt="" />
          </div>
          <div className="bg-green-200 py-1 px-3 mt-2 rounded-full inline-block">
            {props.price} $
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setFavourite((favourite = !favourite));
            }}
          >
            <Image
              src={favourite ? HeartSelected : HeartUnselected}
              height="24"
              className="ml-4 mt-2"
              alt=""
            />
          </button>
        </div>
        <div className="font-bold text-xl pb-4">{props.name}</div>
        <p className="text-gray-700 text-base">{props.description}</p>
      </div>
    </a>
  );
};
export default BookCard;
