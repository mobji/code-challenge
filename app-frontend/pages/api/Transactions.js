const API_URL = "https://infra.devskills.app/api/accounting";

export async function addTransaction(data) {
  const response = await fetch(`${API_URL}/transaction`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function getTransactions() {
  try {
    const response = await fetch(`${API_URL}/transactions`);
    return response.json();
  } catch (error) {
    //TODO: error handeling
    console.log("error: ", error);
    return [];
  }
}

export async function getAccountById(accountId) {
  try {
    const response = await fetch(`${API_URL}/accounts/${accountId}`);
    return response.json();
  } catch (error) {
    //TODO: error handeling
    console.log("error: ", error);
    return [];
  }
}

export async function getTransactionById(TransactionId) {
  try {
    const response = await fetch(`${API_URL}/transactions/${TransactionId}`);
    return response.json();
  } catch (error) {
    //TODO: error handeling
    console.log("error: ", error);
    return [];
  }
}
