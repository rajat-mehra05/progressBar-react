import React from "react";

const Bar = ({ barAmount }) => {
  return (
    <div className="border-2 border-black rounded-full w-96 overflow-hidden">
      <div
        style={{ width: `${barAmount}%` }}
        className={`p-4 rounded-full transition ease-in-out delay-10 ${
          barAmount === 0
            ? "bg-white"
            : barAmount < 20
            ? "bg-red-900"
            : barAmount < 65
            ? "bg-yellow-500"
            : "bg-green-700"
        }`}
      ></div>
    </div>
  );
};

export default Bar;
