import { useBank } from "./context/bankContext";

const HomePage = () => {
    const { balance } = useBank();
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">🏦 Bank Dashboard</h1>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <h2 className="text-2xl">Current Balance</h2>
          <p className="text-3xl font-semibold text-green-600">₹{balance}</p>
        </div>
      </div>
    );
  };
  
  export default HomePage;