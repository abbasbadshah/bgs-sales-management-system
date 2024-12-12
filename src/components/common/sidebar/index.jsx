import React from "react";
import {
  FaHome,
  FaColumns,
  FaInbox,
  FaUsers,
  FaShoppingBag,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";

// Navigation Data
const navigationData = [
  {
    name: "Dashboard",
    href: "#",
    icon: FaHome,
  },
  {
    name: "Kanban",
    href: "#",
    icon: FaColumns,
    badge: "Pro",
  },
  {
    name: "Inbox",
    href: "#",
    icon: FaInbox,
    badgeCount: 3,
  },
  {
    name: "Users",
    href: "#",
    icon: FaUsers,
  },
  {
    name: "Products",
    href: "#",
    icon: FaShoppingBag,
  },
  {
    name: "Sign In",
    href: "#",
    icon: FaSignInAlt,
  },
  {
    name: "Sign Up",
    href: "#",
    icon: FaUserPlus,
  },
];

const Sidebar = ({ isMobile = false, isOpen = false, onClose, className }) => {
  return (
    <aside
      className={`
        left-0 w-64 h-screen bg-gray-100 
        ${className}
      `}
      aria-label="Sidebar"
    >
      <div className="h-screen lg:h-full px-3 py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          {navigationData.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 group"
              >
                <item.icon className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                <span className="ms-3">{item.name}</span>
                {item.badge && (
                  <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full">
                    {item.badge}
                  </span>
                )}
                {item.badgeCount && (
                  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                    {item.badgeCount}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
