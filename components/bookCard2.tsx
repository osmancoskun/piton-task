import { NextPage } from "next";
interface Props {
  category: string;
  description: string;
  images: string[];
  price: number;
  thumbnail: string;
  title: string;
}
const BookCard2: NextPage<Props> = (props) => {
  return (
    <div className="flex flex-wrap items-center ">
      <div className="flex w-full h-48 md:h-64 lg:h-72 relative flex justify-center items">
        <div className="w-12/12 pr-4 ">
          <img
            src={props.thumbnail}
            alt=""
            width="100"
            height="100"
            className="w-full h-full rounded-lg bg-white"
          />
        </div>
      </div>
      <div className="w-full pt-8 flex flex-col justify-between">
        <div>
          <div className="flex justify-between">
            <h2 className="font-bold text-xl">{props.title}</h2>
            <div className="flex items-center">
              <div className="bg-green-200 py-1 px-3 mt-2 rounded-full inline-block text-black">
                {props.price}$
              </div>
            </div>
          </div>
          <p className="text-xs leading-relaxed text-gray-50">
            {props?.description}
          </p>
          <div className="flex flex-wrap text-center pt-4 mb-2">
            <div className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">
              {props.category}
            </div>
          </div>
        </div>

        <div className="w-full sm:flex-1  gap-4  pt-6">
          <button className="w-full block text-center relative text-white font-bold text-sm bg-teal-800 px-4 py-3 rounded-lg shadow-lg hover:shadow-none hover:opacity-75">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};
export default BookCard2;
