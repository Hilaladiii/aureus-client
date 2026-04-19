export function formatCurrency(amount: string | number) {
  if (typeof amount === "number") {
    return;
  }
  return Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
