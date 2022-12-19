import React, { useState, useEffect } from "react";
import TransactionForm from "./TransactionForm";
import TransactionsList from "./TransactionsList";
import {
  addTransaction,
  getTransactions,
  getAccountById,
  getTransactionById,
} from "../pages/api/Transactions";

import styles from "./transactions.module.css";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  const saveTransaction = async (e, accountId, amount) => {
    setLoading(true);
    e.preventDefault();
    const response = await addTransaction({
      account_id: accountId,
      amount: amount,
    });

    //TODO: Handle empty or error response for API calls
    const account = await getAccountById(response.account_id);
    const newTransaction = await getTransactionById(response.transaction_id);
    const transactionsArray = [
      { ...newTransaction, balance: account.balance },
      ...transactions,
    ];
    setTransactions(transactionsArray);
    setLoading(false);
  };

  const loadTransactions = async () => {
    const data = await getTransactions();
    setTransactions(data);
  };

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <div className={styles.row}>
      <div className={styles.column}>
        <TransactionForm onSubmitClick={saveTransaction} />
      </div>
      <div className={styles.column}>
        <TransactionsList transactions={transactions} loading={loading} />
      </div>
    </div>
  );
};

export default Transactions;
