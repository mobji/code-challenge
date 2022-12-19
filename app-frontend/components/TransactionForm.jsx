import React from "react";
import { useState } from "react";

import { UUIDVerification } from "../helpers/helpers";

import styles from "./transactionsForm.module.css";

const TransactionForm = (props) => {
  const [accountId, setAccountId] = useState("");
  const [amount, setAmount] = useState("");
  const [validationhint, setValidationhint] = useState("");

  const onSubmitClick = (e) => {
    e.preventDefault();
    setValidationhint("");
    if (UUIDVerification(accountId)) {
      props.onSubmitClick(e, accountId, amount);
      setAccountId("");
      setAmount("");
    } else {
      setValidationhint("The account ID is not correct");
    }
  };

  return (
    <form>
      <p>{validationhint}</p>
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
