import React from "react";

export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="btn bg-black text-white rounded-md px-3 py-2 text-nowrap 
      transition-colors duration-300 ease-in-out 
      hover:bg-opacity-75"
    >
      {children}
    </button>
  );
}
