export const formatCurrency = (value: number) => {
  const formatted = new Intl.NumberFormat("en-Us", {
    style: "currency",
    currency: "USD",
  }).format(value);

  return formatted;
};
