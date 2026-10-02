// Search box + type filter. All changes are reported via onSearch/onFilterChange.
const TYPE_OPTIONS = ["All", "BILLING", "RTGS"];

export default function FilterBar({
  searchText,
  onSearch,
  selectedType,
  onFilterChange,
}) {
  return (
    <div className="filter-bar">
      <div className="filter-bar__field">
        <label className="filter-bar__label" htmlFor="finance-search">
          Search customer or document
        </label>
        <input
          id="finance-search"
          className="filter-bar__input"
          type="search"
          placeholder="e.g. Sunrise Traders or BILL-2026-001"
          value={searchText}
          onChange={(event) => onSearch(event.target.value)}
        />
      </div>

      <div className="filter-bar__field" role="group" aria-label="Filter by type">
        <span className="filter-bar__label" id="type-filter-label">
          Type
        </span>
        <div className="filter-bar__options">
          {TYPE_OPTIONS.map((option) => (
            <label key={option} className="filter-bar__option">
              <input
                type="radio"
                name="type-filter"
                value={option}
                checked={selectedType === option}
                onChange={() => onFilterChange(option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
