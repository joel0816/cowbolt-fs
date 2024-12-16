import React, { useState } from "react";
import axios from "axios";

const CreateWallet = () => {
  const [username, setUsername] = useState("");
  const [walletAddress, setWalletAddress] = useState(null);
  const [error, setError] = useState(null);

  const createWallet = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/wallet/create`,
        { username }
      );
      setWalletAddress(response.data.address);
      setError(null);
    } catch (error) {
      setError("Error creating wallet. Please try again.");
      setWalletAddress(null);
    }
  };

  return (
    <div>
      <h2>Create Wallet</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <button onClick={createWallet}>Create Wallet</button>
      {walletAddress && <p>Your Wallet Address: {walletAddress}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default CreateWallet;
