import React, { useState } from "react";
import Bar from "./Bar";
import ClearButton from "./ClearButton";
import Footer from "./Footer";
import InfoContainer from "./InfoContainer";

const ProgressInput = () => {
  const [input, setInput] = useState("");
  const [barAmount, setBarAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBarAmount(input);
  };

  return (
    <div className="flex flex-col space-y-8 justify-center items-center h-screen">
      <h1 className="font-bold text-2xl text-gray-900"> Progress Bar </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Fill in the number"
          className="border-2 border-gray-700 pl-2 py-1 w-full"
        />
      </form>
      <Bar barAmount={barAmount} />
      <ClearButton setBarAmount={setBarAmount} setInput={setInput} />
      <InfoContainer />
      <Footer />
    </div>
  );
};

export default ProgressInput;
