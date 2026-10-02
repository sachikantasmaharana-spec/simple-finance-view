// One summary card: a label, a value, and an optional note.
export default function SummaryCard({ label, value, note }) {
  return (
    <section className="summary-card" aria-label={label}>
      <h2 className="summary-card__label">{label}</h2>
      <p className="summary-card__value">{value}</p>
      {note ? <p className="summary-card__note">{note}</p> : null}
    </section>
  );
}
