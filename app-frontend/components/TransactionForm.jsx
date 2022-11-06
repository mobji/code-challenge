import React from "react";
import { useState } from "react";

import styles from "./transactionsForm.module.css";

const TransactionForm = (props) => {
  const [accountId, setAccountId] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmitClick = (e) => {
    props.onSubmitClick(e, accountId, amount);
    setAccountId("");
    setAmount("");
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
