// Six clearly labelled demo records.
// BILLING amounts are positive; RTGS amounts are negative.
const transactions = [
  {
    id: 1,
    type: "BILLING",
    customer: "Sunrise Traders",
    documentNumber: "BILL-2026-001",
    postingDate: "2026-09-12",
    amount: 1250.5,
  },
  {
    id: 2,
    type: "RTGS",
    customer: "Sunrise Traders",
    documentNumber: "RTGS-88214",
    postingDate: "2026-09-15",
    amount: -800,
  },
  {
    id: 3,
    type: "BILLING",
    customer: "Coastal Foods Ltd",
    documentNumber: "BILL-2026-002",
    postingDate: "2026-09-18",
    amount: 3420.75,
  },
  {
    id: 4,
    type: "RTGS",
    customer: "Orion Hardware",
    documentNumber: "RTGS-88302",
    postingDate: "2026-09-21",
    amount: -1575.25,
  },
  {
    id: 5,
    type: "BILLING",
    customer: "Orion Hardware",
    documentNumber: "BILL-2026-003",
    postingDate: "2026-09-24",
    amount: 990,
  },
  {
    id: 6,
    type: "RTGS",
    customer: "Coastal Foods Ltd",
    documentNumber: "RTGS-88417",
    postingDate: "2026-09-28",
    amount: -4200,
  },
];

export default transactions;
