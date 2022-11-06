import React from "react";
import TransactionForm from "./TransactionForm";
import TransactionsList from "./TransactionsList";

import styles from "./transactions.module.css";

const Transactions = () => {
  return (
    <div className={styles.row}>
      <div className={styles.column}>
        <TransactionForm />
      </div>
      <div className={styles.column}>
        <TransactionsList />
      </div>
    </div>
  );
};

export default Transactions;
