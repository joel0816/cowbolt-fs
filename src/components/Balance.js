import React, { useState } from "react";
import axios from "axios";

const Balance = () => {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState(null);

  const fetchBalance = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/wallet/balance/${address}`
      );
      setBalance(response.data.balance);
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  return (
    <div>
      <h2>Check Balance</h2>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter wallet address"
      />
      <button onClick={fetchBalance}>Check Balance</button>
      {balance !== null && <p>Balance: {balance} ETH</p>}
    </div>
  );
};

export default Balance;
