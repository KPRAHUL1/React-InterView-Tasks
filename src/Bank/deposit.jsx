import { useState } from "react";
import { useBank } from "./context/bankContext";

const DepositPage = () => {
    const [amount, setAmount] = useState(0);
    const { deposit } = useBank();
  
    const handleDeposit = () => {
      if (amount > 0) {
        deposit(Number(amount));
        setAmount(0);
      }
    };
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-4xl font-bold mb-6">💰 Deposit Money</h1>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="border px-4 py-2 rounded-lg mb-4 w-full"
          />
          <button
            onClick={handleDeposit}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 w-full"
          >
            Deposit
          </button>
        </div>
      </div>
    );
  };
  
  export default DepositPage;
  
