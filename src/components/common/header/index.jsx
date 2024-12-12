import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoNotificationsSharp } from "react-icons/io5";

export const Header = ({ onSidebarToggle, className }) => {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const toggleMobileSearch = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen);
  };

  return (
    <header className={`bg-primary text-white ${className}`}>
      <nav className="px-4 py-3 flex items-center justify-between">
        {/* Sidebar Toggle (Mobile Only) */}
        <button
          onClick={onSidebarToggle}
          className="block md:hidden text-white hover:text-gray-300"
        >
          <FaBarsStaggered size={24} />
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo/logo.png" alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-bold">BGS Shop Management</span>
        </Link>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center relative flex-grow max-w-md mx-4">
          <BiSearch className="absolute left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-3 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Mobile Search Toggle */}
          <button
            onClick={toggleMobileSearch}
            className="md:hidden text-white hover:text-gray-300"
          >
            <BiSearch size={20} />
          </button>

          {/* Notifications */}
          <button className="text-white hover:text-gray-300 relative">
            <IoNotificationsSharp size={20} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1 text-xs">
              3
            </span>
          </button>

          {/* User Avatar */}
          <img
            src="/images/placeholder.png"
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </nav>

      {/* Mobile Search Dropdown */}
      {isMobileSearchOpen && (
        <div className="absolute top-full left-0 w-full md:hidden bg-primary p-4 z-50">
          <div className="relative">
            <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-3 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      )}
    </header>
  );
};
