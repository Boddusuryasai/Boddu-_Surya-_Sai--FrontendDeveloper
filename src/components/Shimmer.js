import React from "react";

export const Shimmer = () => {
  return (
    <>
      {Array(10)
        .fill("")
        .map((e, i) => {
          return (
            <div
              className="w-[250px] max-w-xs bg-white drop-shadow-md rounded-lg"
              key={i}
            >
              <div className="animate-pulse w-full h-48 bg-slate-200"></div>
            </div>
          );
        })}
    </>
  );
};
