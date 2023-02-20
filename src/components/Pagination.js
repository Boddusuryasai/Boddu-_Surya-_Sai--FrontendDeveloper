import React from "react";

export const Pagination = ({ data, pageHandler }) => {
  let pageNumbers = [];
  for (let i = 1; i < Math.ceil(data.length / 10) + 1; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex flex-row justify-center gap-2 p-2 bg-pink-100">
      {pageNumbers.map((page, i) => {
        return (
          <button
            onClick={() => pageHandler(page)}
            key={i}
            className=" w-8 py-1 text-white rounded-md bg-pink-900 "
          >
            {" "}
            {page}
          </button>
        );
      })}
    </div>
  );
};
