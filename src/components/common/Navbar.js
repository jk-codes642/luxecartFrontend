import React, { useEffect, useRef, useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { IoNotificationsCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const cartRef = useRef(null);
  const accountRef = useRef(null);

  const toggleCart = () => {
    setIsCartOpen((prev) => {
      if (!prev) setIsAccountOpen(false); // Close Account if Cart is opening
      return !prev;
    });
  };

  const toggleAccount = () => {
    setIsAccountOpen((prev) => {
      if (!prev) setIsCartOpen(false); // Close Cart if Account is opening
      return !prev;
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cartRef.current &&
        !cartRef.current.contains(event.target) &&
        accountRef.current &&
        !accountRef.current.contains(event.target)
      ) {
        setIsCartOpen(false);
        setIsAccountOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const cartItems = [
    { id: 1, name: "Apple iPhone 15", price: "$599", qty: 1 },
    { id: 2, name: "Apple iPad Air", price: "$499", qty: 1 },
    { id: 3, name: "Apple Watch SE", price: "$598", qty: 2 },
    { id: 4, name: "Sony Playstation 5", price: "$799", qty: 1 },
    { id: 5, name: 'Apple iMac 20"', price: "$8,997", qty: 3 },
  ];

  const accountItems = [
    { id: 1, name: "My Account" },
    { id: 2, name: "My Orders" },
    { id: 3, name: "Settings" },
    { id: 4, name: "Favourites" },
    { id: 5, name: "Dilevery Addresses" },
  ];
  return (
    <nav className="bg-white antialiased mt-0">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Navigation Links */}
          <div className="flex items-center space-x-8">
            <div className="shrink-0">
              <p className="text-2xl">LuxeCart</p>
            </div>
          </div>

          {/* Cart & Account */}
          <div className="flex items-center space-x-4 relative">
            {/* Cart Button */}
            <div ref={cartRef} className="relative">
              <button
                onClick={toggleCart}
                type="button"
                className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 text-sm font-medium text-gray-900"
              >
                <FaShoppingCart className="mr-1" size={18} />
                <span className="hidden sm:flex text-base">My Cart</span>
              </button>
            </div>

            <div ref={accountRef} className="relative">
              <button
                onClick={toggleAccount}
                type="button"
                className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 text-sm font-medium text-gray-900"
              >
                <span className="sr-only">Account</span>
                <FaUser className="mr-1" size={18} />
                <span className="hidden sm:flex">Account</span>
                <svg
                  className="hidden sm:flex w-4 h-4 text-gray-900 ms-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>

              {isAccountOpen && (
                <div className="absolute right-0 top-12 z-50 w-64 space-y-4 rounded-lg bg-white p-4 shadow-lg">
                  {accountItems.map((item) => (
                    <div key={item.id}>
                      <a
                        href="#"
                        className="truncate text-sm font-semibold text-gray-900 hover:underline"
                      >
                        {item.name}
                      </a>
                    </div>
                  ))}
                  <a
                    href="#"
                    className="inline-flex w-full justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
                  >
                    Sign Out
                  </a>
                </div>
              )}
            </div>

            <div>
              <IoNotificationsCircle size={30} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
