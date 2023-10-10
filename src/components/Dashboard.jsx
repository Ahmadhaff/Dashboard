import Chart from "./Chart";
import { GiMoneyStack } from "react-icons/gi";
import { LiaUsersSolid } from "react-icons/lia";
import { FaUsersGear, FaMoneyBillWheat } from "react-icons/fa6";
import { FiActivity } from "react-icons/fi";
import Pie from "./Pie";

const Dashboard = () => {
  return (
    <div className="flex flex-col space-y-6 py-12 px-10">
      <h2>Dashboard</h2>

      <div className="flex space-x-5">
        <div className="w-2/6 h-[150px] shadow-lg rounded-lg flex flex-col justify-center items-center p-4 hover:border-t-[2px] border-green-400 hover-green-shadow hover:scale-[105%] transition duration-500 ease">
          <GiMoneyStack className="w-14 h-14 text-green-500 " />
          <span className=" text-xl font-bold">50.000 $</span>
        </div>
        <div className="w-2/6 h-[150px] shadow-lg rounded-lg flex flex-col justify-center items-center p-4 hover:border-t-[2px] border-green-400 hover-green-shadow hover:scale-[105%] transition duration-500 ease">
          <LiaUsersSolid className="w-14 h-14 text-green-500" />
          <span className=" text-xl font-bold">50</span>
        </div>
        <div className="w-2/6 h-[150px] shadow-lg rounded-lg flex flex-col justify-center items-center p-4 hover:border-t-[2px] border-green-400 hover-green-shadow hover:scale-[105%] transition duration-500 ease">
          <FaUsersGear className="w-14 h-14 text-green-500" />
          <span className=" text-xl font-bold">80</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5">
  <div>
    <h2>Chart</h2>
    <Chart />
  </div>
  <div className="h-72">
    <h2>Pie</h2>
    <Pie />
  </div>
</div>

      <div className="flex justify-between items-center">
        <div className="w-2/6 h-[150px] shadow-lg rounded-lg flex flex-col justify-center items-center p-4 hover:border-t-[2px] border-green-400 hover-green-shadow hover:scale-[105%] transition duration-500 ease">
          <FiActivity className="w-14 h-14 text-green-500" />
          <span className=" text-xl font-bold">Activity</span>
        </div>
        <div className="w-2/6 h-[150px] shadow-lg rounded-lg flex flex-col justify-center items-center p-4 hover:border-t-[2px] border-green-400 hover-green-shadow hover:scale-[105%] transition duration-500 ease">
          <FaMoneyBillWheat className="w-14 h-14 text-green-500" />
          <span className=" text-xl font-bold"> 4 </span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
