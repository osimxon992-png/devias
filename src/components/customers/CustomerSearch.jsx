function CustomerSearch() {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-4">
      <div className="flex h-10 flex-1 items-center rounded-md border border-gray-200 px-3">
        <span className="mr-2 text-lg text-gray-400">⌕</span>

        <input
          type="text"
          placeholder="Search customers"
          className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
        />
      </div>

      <div className="flex h-10 w-36 flex-col justify-center rounded-md border border-gray-200 px-3">
        <span className="text-[9px] text-gray-400">Sort By</span>

        <select className="bg-transparent text-xs text-gray-700 outline-none">
          <option>Last update (newest)</option>
          <option>Last update (oldest)</option>
        </select>
      </div>
    </div>
  );
}

export default CustomerSearch;
