const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function addTransaction(data) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data }),
  });
  return await response.json();
}

export async function getTransactions() {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    return [];
  }
}
