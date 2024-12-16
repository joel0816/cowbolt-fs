import React, { useState } from "react";
import axios from "axios";

const SendTransaction = () => {
  const [sender, setSender] = useState("");
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionId, setTransactionId] = useState(null);

  const sendTransaction = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/transaction/send`,
        {
          sender,
          recipient,
          amount,
        }
      );
      setTransactionId(response.data.id);
    } catch (error) {
      console.error("Error sending transaction:", error);
    }
  };

  return (
    <div>
      <h2>Send Cryptocurrency</h2>
      <input
        type="text"
        value={sender}
        onChange={(e) => setSender(e.target.value)}
        placeholder="Sender address"
      />
      <input
        type="text"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        placeholder="Recipient address"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <button onClick={sendTransaction}>Send</button>
      {transactionId && <p>Transaction ID: {transactionId}</p>}
    </div>
  );
};

export default SendTransaction;
