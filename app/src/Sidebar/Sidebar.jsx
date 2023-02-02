import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed z-30 flex items-center cursor-pointer right-7 top-3"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`top-0 right-0 w-[35vw] bg-blue-600  p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <h3 className="mt-20 text-5xl font-semibold text-white">Boo!</h3>
        <div className="flex flex-col text-red-300 pt-3 gap-1 text-2xl" onClick={() => setShowSidebar(false)}>
          <Link className="relative hover:translate-x-2" to={"/"}>
            Home
          </Link>
          <Link className="relative hover:translate-x-2" to={"/table"}>
            Table
          </Link>
          <Link to={"https://thiscatdoesnotexist.com/"}>Meow!</Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
