import React from "react";

const ClearButton = ({ setBarAmount, setInput }) => {
  function clearBarAmount() {
    setBarAmount(0);
    setInput("");
  }

  return (
    <div>
      <button
        onClick={clearBarAmount}
        className="rounded bg-blue-700 hover:bg-blue-500 text-white p-2"
      >
        Clear Bar
      </button>
    </div>
  );
};

export default ClearButton;
