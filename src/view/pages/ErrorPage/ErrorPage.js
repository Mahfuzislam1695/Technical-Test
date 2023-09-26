import React from "react";
import error from "../../../asset/animation/42479-page-not-found-404.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div class="w-full h-screen flex flex-col items-center justify-center">
        <Lottie className="h-80 w-auto" animationData={error} loop={true} />

        <div class="flex flex-col items-center justify-center">
          <p class="text-3xl md:text-4xl lg:text-5xl text-gray-800 ">
            Page Not Found
          </p>
          <p class="md:text-lg lg:text-xl text-gray-600 mt-8 items-center">
            Sorry, the page you are looking for could not be found.
          </p>
          <Link
            class="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-800 text-gray-100 px-4 py-2 mt-12 rounded transition duration-150"
            title="Return Home"
          >
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
