import { useMemo, useState } from "react";
import transactions from "./data/transactions";
import { billingTotal, filterRows, formatAmount, rtgsTotal } from "./utils/finance";
import SummaryCard from "./components/SummaryCard";
import FilterBar from "./components/FilterBar";
import TransactionTable from "./components/TransactionTable";
import "./index.css";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  // Cards and table share the same filtered rows.
  const filteredRows = useMemo(
    () => filterRows(transactions, searchText, selectedType),
    [searchText, selectedType]
  );

  return (
    <main className="finance">
      <header className="finance__header">
        <h1>FinanceView</h1>
        <p>Transactions overview — all amounts in Local currency.</p>
      </header>

      <FilterBar
        searchText={searchText}
        onSearch={setSearchText}
        selectedType={selectedType}
        onFilterChange={setSelectedType}
        onClearFilters={() => {
          setSearchText("");
          setSelectedType("All");
        }}
      />

      <div className="finance__cards">
        <SummaryCard
          label="Filtered rows"
          value={String(filteredRows.length)}
          note="Transactions matching the filters"
        />
        <SummaryCard
          label="Billing total"
          value={formatAmount(billingTotal(filteredRows))}
          note="Sum of BILLING amounts"
        />
        <SummaryCard
          label="RTGS total"
          value={formatAmount(rtgsTotal(filteredRows))}
          note="Magnitude of RTGS amounts"
        />
      </div>

      <TransactionTable rows={filteredRows} />
    </main>
  );
}
