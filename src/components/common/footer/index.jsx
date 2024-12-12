import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaGithub, FaDribbble } from "react-icons/fa";

export const Footer = ({ className }) => {
  return (
    <footer
      className={`bg-primary shadow sm:flex sm:items-center sm:justify-between p-4 sm:p-6 xl:p-8 antialiased ${className}`}
    >
      <p className="mb-4 text-sm text-center text-gray-500 sm:mb-0">
        {new Date().getFullYear()}{" "}
        <Link to="/" className="hover:underline">
          Badshah General Store
        </Link>
        . All rights reserved.
      </p>
      <div className="flex justify-center items-center space-x-1">
        <Link
          to="#"
          className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100"
        >
          <FaFacebook className="w-4 h-4" />
          <span className="sr-only">Facebook</span>
        </Link>
        <Link
          to="#"
          className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100"
        >
          <FaTwitter className="w-4 h-4" />
          <span className="sr-only">Twitter</span>
        </Link>
        <Link
          to="#"
          className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100"
        >
          <FaGithub className="w-4 h-4" />
          <span className="sr-only">Github</span>
        </Link>
        <Link
          to="#"
          className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100"
        >
          <FaDribbble className="w-4 h-4" />
          <span className="sr-only">Dribbble</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
