import React from "react";
import { useState } from "react";
import { addTransaction } from "../pages/api/Transactions";

import styles from "./transactionsForm.module.css";

const TransactionForm = () => {
  const [accountId, setAccountId] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmitClick = (e) => {
    e.preventDefault();
    addTransaction({ account_id: accountId, amount: amount });
  };

  return (
    <form>
      <input
        className={styles.input}
        id="account_id"
        data-type="account-id"
        onChange={(e) => setAccountId(e.target.value)}
        placeholder="Account Id"
        value={accountId}
      ></input>
      <input
        className={styles.input}
        data-type="amount"
        id="amount"
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        value={amount}
      ></input>
      <button
        className={styles.submit}
        data-type="transaction-submit"
        type="submit"
        onClick={onSubmitClick}
      >
        Submit
      </button>
    </form>
  );
};

export default TransactionForm;
