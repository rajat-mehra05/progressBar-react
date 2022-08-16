import React from "react";

const InfoContainer = () => {
  return (
    <div className="bg-gray-400 space-y-4 px-6 py-2">
      <h1 className="font-semibold text-2xl text-center"> Rules </h1>
      <ul className="list-decimal italic">
        <li>If the barAmount is less than 20%, bar needs to be red </li>
        <li>If the barAmount is less than 65% , bar needs to be orange </li>
        <li>Else bar needs to be green </li>
      </ul>
    </div>
  );
};

export default InfoContainer;
