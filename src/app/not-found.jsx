import React from "react";
import Link from "next/link";

const Error404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        {/* Animated Icon or Text */}
        <h1 className="text-9xl font-bold text-blue-600 animate-bounce">404</h1>

        <h2 className="mt-4 text-3xl font-semibold text-gray-800">Oops! Page Not Found</h2>

        <p className="mt-2 text-gray-600 text-lg">
          Apni je page-ti khujchen seta hoyto delete hoye geche ba link-e bhul ache.
        </p>

        {/* Back to Home Button */}
        <div className="mt-8">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Go Back Home
          </Link>
        </div>
      </div>

      {/* Optional: Add an Illustration/Image */}
      <div className="mt-12 w-full max-w-md">
        <img
          src="https://illustrations.popsy.co/gray/falling.svg"
          alt="Error Illustration"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Error404;
