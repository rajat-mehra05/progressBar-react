import React from "react";

const Bar = ({ barAmount }) => {
  return (
    <div
      className={`border-2 border-black p-4 w-96 rounded-full ${
        barAmount === 0
          ? "bg-white"
          : barAmount < 20
          ? "bg-red-900"
          : barAmount < 65
          ? "bg-yellow-500"
          : "bg-green-700"
      }`}
    ></div>
  );
};

export default Bar;
