import { useState } from "react";
import { useBank } from "./context/bankContext";
import { Link, Route, Routes } from "react-router-dom";
import Cashier from "./cashier";

const WithdrawPage = () => {
  const [amount, setAmount] = useState(0);
 const {withdraw}=useBank();

  const handleWithdraw = () => {
    if (amount > 0) {
      withdraw(Number(amount));
      setAmount(0);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-6">🧾 Withdraw Money</h1>
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="border px-4 py-2 rounded-lg mb-4 w-full"
        />
        <button
          onClick={handleWithdraw}
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 w-full"
        >
          Withdraw
        </button>
       
      </div>
    </div>
  );
};

export default WithdrawPage;
