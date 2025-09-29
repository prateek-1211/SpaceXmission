export default function Filters({
  search,
  setSearch,
  year,
  setYear,
  successOnly,
  setSuccessOnly,
  favoritesOnly,
  setFavoritesOnly,
}) {
  return (
    <div className="bg-white shadow-sm rounded-lg p-4 flex flex-wrap items-center gap-4 border border-gray-200">
      {/* Search Box */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by mission name..."
        className="border border-gray-300 rounded-md px-3 py-2 flex-1 min-w-[220px] focus:ring-2 focus:ring-blue-500 outline-none"
      />

      {/* Year Dropdown */}
      <select
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
      >
        <option value="">All Years</option>
        {Array.from({ length: 20 }, (_, i) => {
          const y = 2025 - i;
          return (
            <option key={y} value={y}>
              {y}
            </option>
          );
        })}
      </select>

      {/* Checkboxes */}
      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={successOnly}
          onChange={(e) => setSuccessOnly(e.target.checked)}
          className="w-4 h-4"
        />
        Successfully only
      </label>

      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={favoritesOnly}
          onChange={(e) => setFavoritesOnly(e.target.checked)}
          className="w-4 h-4"
        />
        Show favorites
      </label>
    </div>
  );
}
