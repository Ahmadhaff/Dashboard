import { FaSearch, FaRegBell, FaEnvelope } from "react-icons/fa";
import logo from "../assets/logo.jpg";

const View = () => {
  return (
    <div className="flex justify-between items-center shadow h-14 space-x-3">
      <div className="flex items-center rounded-lg">
        <input
          type="text"
          className=" mt-2 p-2 w-2/9 outline-none rounded placeholder:text-[14px] leading-[20px]  font-normal "
          placeholder="search for..."
        />
        <div className="bg-green-500 mt-2 p-2 flex justify-center items-center cursor-pointer rounded-r ">
          <FaSearch />
        </div>
      </div>
      <div className="flex items-center gap-6 relative">
        <div className="flex items-center gap-4">
          <FaRegBell />
          <FaEnvelope />
        </div>
        <div className="flex items-center gap-4 relative">
          <p>Ahmad Haff</p>
          <div className="mr-2 w-10 h-10 rounded-full  cursor-pointer flex items-center">
            <img
              src={logo}
              alt="logo"
              className="rounded-full ring-2 ring-green-500 shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
