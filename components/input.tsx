import { NextPage } from "next";
interface Props {
  id?: string;
  type: string;
  placeholder?: string;
  label: string;
  onChange?: (event: any) => void;
}
const Input: NextPage<Props> = (props) => {
  return (
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
          {props.label}
        </label>
      </div>
      <div className="md:w-2/3">
        <input
          id={props.id}
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

export default Input;
