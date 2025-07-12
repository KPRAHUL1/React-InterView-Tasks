import {  Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { BankProvider } from "./Bank/context/bankContext";
import HomePage from "./Bank/home";
import DepositPage from "./Bank/deposit";
import WithdrawPage from "./Bank/withdraw";

const App = () => {
  return (
    <BankProvider>
      <BrowserRouter>
      <nav className="bg-blue-600 text-white p-4 flex justify-center gap-6">
          <Link to="/">Home</Link> | <Link to="/deposit">Deposit</Link> | <Link to="/withdraw">Withdraw</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/deposit" element={<DepositPage/>} />
          <Route path="/withdraw" element={<WithdrawPage />} />
        </Routes>
        <footer>
          <h1>Banking App</h1>
        </footer>
        </BrowserRouter>
    </BankProvider>
  );
};

export default App;
