import React, { useState } from "react";
import axios from "axios";

const TransactionHistory = () => {
  const [address, setAddress] = useState("");
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(null);

  const fetchTransactionHistory = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/transaction/history/${address}`
      );
      setHistory(response.data);
      setError(null);
    } catch (error) {
      setError("Error fetching transaction history. Please try again.");
      setHistory([]);
    }
  };

  return (
    <div>
      <h2>Transaction History</h2>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter wallet address"
      />
      <button onClick={fetchTransactionHistory}>Fetch History</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {history.length > 0 ? (
        <ul>
          {history.map((transaction) => (
            <li key={transaction.id}>
              <p>
                <strong>Sender:</strong> {transaction.sender.address} <br />
                <strong>Recipient:</strong> {transaction.recipient.address}{" "}
                <br />
                <strong>Amount:</strong> {transaction.amount} ETH <br />
                <strong>Timestamp:</strong>{" "}
                {new Date(transaction.timestamp).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        !error && <p>No transactions found.</p>
      )}
    </div>
  );
};

export default TransactionHistory;
