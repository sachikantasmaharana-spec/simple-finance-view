// Semantic table of the filtered rows.
import { formatAmount } from "../utils/finance";

export default function TransactionTable({ rows }) {
  return (
    <div className="table-wrap">
      <table className="transaction-table">
        <caption className="visually-hidden">
          Filtered transactions. Amounts are signed in local currency.
        </caption>
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Customer</th>
            <th scope="col">Document number</th>
            <th scope="col">Posting date</th>
            <th scope="col" className="transaction-table__num">
              Amount (Local currency)
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={5} className="transaction-table__empty">
                No transactions match the current filters.
              </td>
            </tr>
          ) : (
            rows.map((row) => (
              <tr key={row.id}>
                <td>
                  <span className={`badge badge--${row.type.toLowerCase()}`}>
                    {row.type}
                  </span>
                </td>
                <td>{row.customer}</td>
                <td>{row.documentNumber}</td>
                <td>{row.postingDate}</td>
                <td className="transaction-table__num">
                  {formatAmount(row.amount)}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
