import React from "react";
import CreateWallet from "./components/CreateWallet";
import Balance from "./components/Balance";
import SendTransaction from "./components/SendTransaction";
import TransactionHistory from "./components/TransactionHistory";

function App() {
  return (
    <div className="App">
      <h1>Crypto Wallet</h1>
      <CreateWallet />
      <Balance />
      <SendTransaction />
      <TransactionHistory />
    </div>
  );
}

export default App;
