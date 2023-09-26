import React, { useState } from "react";
import { BsGrid, BsListUl } from "react-icons/bs";

const Navbar = () => {
  const [selectedDiv, setSelectedDiv] = useState(1);
  // const [selectedDiv, setSelectedDiv] = useState(1);

  return (
    <div>
      <header className="bg-white py-3 fixed top-0 left-0 w-full z-50 border">
        <div className="relative">
          <div className="container mx-auto px-4 ">
            <nav className="flex items-center justify-between">
              <div className="font-bold text-xl max-lg:ml-4 text-sky-600">
                Technical Test
              </div>

              <div>
                <div className="flex">
                  <button
                    onClick={() => setSelectedDiv(1)}
                    className={`${
                      selectedDiv === 1 ? "bg-blue-500" : "bg-blue-200"
                    } p-1 rounded-l-md focus:outline-none`}
                  >
                    <BsGrid fontSize={20} />
                  </button>
                  <button
                    onClick={() => setSelectedDiv(2)}
                    className={`${
                      selectedDiv === 2 ? "bg-blue-500" : "bg-blue-200"
                    } p-1 rounded-r-md focus:outline-none`}
                  >
                    <BsListUl fontSize={20} />
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
