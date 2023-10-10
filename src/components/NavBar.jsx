import { useState } from "react";
import logo from "../assets/logo.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import { expanded, nonExpanded } from "../Variants";

import {
  LayoutDashboard,
  Clock3,
  BarChart2,
  ArrowRightLeft,
  HelpCircleIcon,
} from "lucide-react";

const navLinks = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Activity",
    icon: Clock3,
  },
  {
    name: "Analytics",
    icon: BarChart2,
  },
  {
    name: "Transactions",
    icon: ArrowRightLeft,
  },
  {
    name: "Help Center",
    icon: HelpCircleIcon,
  },
];

const NavBar = () => {
  const [activeNav, setActiveNav] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);

  const navVariants = {
    expanded: expanded,
    nonExpanded: nonExpanded,
  };
  return (
    <motion.div
      variants={navVariants}
      initial="expanded"
      animate={isExpanded ? "expanded" : "nonExpanded"}
      className={"py-12 flex flex-col border border-r-1 w-1/5 h-screen relative " + (isExpanded ? "px-10": "px-2")}
    >
      <div className="flex space-x-3 items-center">
      <img src={logo} alt="logo" className="w-11 h-11 rounded-full green-shadow " />

        <span className={isExpanded ? "block" : "hidden"}>Admin Panel</span>
      </div>

      <div
        onClick={() => setIsExpanded((prevState) => !prevState)}
        className="w-5 h-5 bg-green-500 rounded-full absolute -right-[10.5px] top-16 flex justify-center items-center "
      >
        <MdOutlineKeyboardArrowRight className = "hover:cursor-pointer"/>
      </div>

      <div className="mt-10 flex flex-col space-y-8 items-center"> 
    {navLinks.map((items, i) => (
      <div
        key={i}
        className={
          "hover:cursor-pointer flex w-full p-2 rounded " +
          (activeNav === i ? "bg-green-500 text-black font-semibold " : "")
        }
        onClick={() => setActiveNav(i)}
      >
        <div className="flex items-center justify-center w-8 h-8">
            <items.icon />
        </div>
        <span className={"flex items-center space-x-3 " + (isExpanded ? "block" : "hidden")}>{items?.name}</span>
      </div>
    ))}
</div>

    </motion.div>
  );
};

export default NavBar;
