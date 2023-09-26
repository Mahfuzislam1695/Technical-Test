import React from "react";
import error1 from "../../../asset/animation/94900-error.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { useNavigate, useRouteError } from "react-router-dom";

const DisplayError = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleLogOut = () => {};
  return (
    <div>
      <div class="w-full h-screen flex flex-col items-center justify-center">
        <Lottie className="h-80 w-auto" animationData={error1} loop={true} />

        <div class="flex flex-col items-center justify-center -mt-2">
          <p class="text-3xl md:text-4xl lg:text-5xl text-gray-800 ">
            Something went wrong!!!
          </p>
          <p class="md:text-lg lg:text-xl text-red-400 mt-8">
            {error.statusText || error.message}
          </p>
          <button
            class="flex items-center space-x-2 bg-red-600 hover:bg-red-800 text-gray-100 px-4 py-2 my-6 rounded transition duration-150"
            title="Return Home"
          >
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Sign out</span>
          </button>
          <p class="text-base md:text-lg lg:text-xl text-indigo-800 ">
            please sign out and log back in
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplayError;
// import React, { useContext } from "react";
// import { useNavigate, useRouteError } from "react-router-dom";

// const DisplayError = () => {
//   const error = useRouteError();
//   const navigate = useNavigate();

//   const handleLogOut = () => {};

//   return (
//     <div>
//       <p className="text-red-500">Something went wrong!!!</p>
//       <p className="text-red-400">{error.statusText || error.message}</p>
//       <h4 className="text-3xl">
//         {" "}
//         Please <button onClick={handleLogOut}>Sign out</button> and log back in
//       </h4>
//     </div>
//   );
// };

// export default DisplayError;
