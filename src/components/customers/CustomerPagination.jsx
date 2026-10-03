function CustomerPagination() {
  return (
    <div className="flex items-center justify-between border-t border-gray-100 px-4 py-3">
      <div className="flex items-center gap-2 text-xs text-gray-500">
        <span>Rows per page:</span>

        <select className="bg-transparent text-xs font-medium text-gray-700 outline-none">
          <option>5</option>
          <option>10</option>
          <option>20</option>
        </select>
      </div>

      <div className="flex items-center gap-4 text-xs text-gray-500">
        <span>1–5 of 10</span>

        <button className="text-lg hover:text-gray-900">‹</button>

        <button className="text-lg hover:text-gray-900">›</button>
      </div>
    </div>
  );
}

export default CustomerPagination;
