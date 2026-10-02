// Small pure helpers used by the FinanceView dashboard.

// Keep only rows matching the search text and the selected type.
export function filterRows(rows, searchText, type) {
  const query = searchText.trim().toLowerCase();
  return rows.filter((row) => {
    const matchesType = type === "All" || row.type === type;
    const matchesText =
      query === "" ||
      row.customer.toLowerCase().includes(query) ||
      row.documentNumber.toLowerCase().includes(query);
    return matchesType && matchesText;
  });
}

// Sum of positive (BILLING) amounts in the given rows.
export function billingTotal(rows) {
  return rows
    .filter((row) => row.amount > 0)
    .reduce((sum, row) => sum + row.amount, 0);
}

// Sum of the magnitudes of negative (RTGS) amounts in the given rows.
export function rtgsTotal(rows) {
  return rows
    .filter((row) => row.amount < 0)
    .reduce((sum, row) => sum + Math.abs(row.amount), 0);
}

// Signed amount with exactly two decimals, e.g. "-1,575.25".
export function formatAmount(value) {
  const sign = value < 0 ? "-" : "";
  return sign + Math.abs(value).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
