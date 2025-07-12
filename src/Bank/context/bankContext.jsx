import { createContext, useContext, useState } from "react";

const BankContext = createContext();

export const BankProvider = ({ children }) => {
  const [balance, setBalance] = useState(1000); 

  const deposit = (amount) => {
    setBalance((prev) => prev + amount);
  };

  const withdraw = (amount)=>{
    setBalance((prev)=>prev-amount)
  }
  return (
    <BankContext.Provider value={{ balance, deposit,withdraw }}>
      {children}
    </BankContext.Provider>
  );
};

export const useBank = () => useContext(BankContext);
