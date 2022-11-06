import React from "react";
import styles from "./transactionsList.module.css";

const TransactionsList = (props) => {
  return (
    <div className={styles.cards}>
      {props.transactions.map((transaction) => card(transaction))}
    </div>
  );
};

const card = ({ transaction_id, account_id, amount, balance = null }) => {
  const TransactionDirection = amount > 0 ? " to " : " from ";
  return (
    <div
      className={styles.card}
      data-type="transaction"
      data-account-id={account_id}
      data-amount={amount}
      {...(balance && { "data-balance": balance })}
      key={transaction_id}
    >
      <p>
        Transfered <span className={styles.bold}>{amount}</span>
        {TransactionDirection} account{" "}
        <span className={styles.bold}>{account_id}</span>
      </p>
      {balance && <p>The current account balance: {balance}</p>}
    </div>
  );
};

export default TransactionsList;
