

const products = [
  {
    id: 1,
    name: 'Healthcare Erbology',
    category: 'in healthcare',
    stockText: '85 in stock in 2 variants',
    price: '$23.99',
    sku: '401_1BBXBK',
    status: 'PUBLISHED',
    bg: 'bg-slate-200',
  },
  {
    id: 2,
    name: 'Makeup Lancome Rouge',
    category: 'in makeup',
    stockText: '0 in stock',
    price: '$95.00',
    sku: '978_UBFGJC',
    status: 'PUBLISHED',
    bg: 'bg-stone-200',
    
  },
  {
    id: 3,
    name: 'Layering Bracelets Collection',
    category: 'in jewelry',
    stockText: '48 in stock in 5 variants',
    isStockGreen: true,
    price: '$155.00',
    sku: '211_QFEXJO',
    status: 'DRAFT',
    bg: 'bg-gray-100',
  
  },
  {
    id: 4,
    name: 'Skincare Necessaire',
    category: 'in skincare',
    stockText: '5 in stock',
    isStockGreen: false,
    price: '$17.99',
    sku: '321_UWEAJT',
    status: 'PUBLISHED',
    bg: 'bg-zinc-200',
   
  },
  {
    id: 5,
    name: 'Skincare Soja CO',
    category: 'in skincare',
    stockText: '10 in stock',
    isStockGreen: true,
    price: '$65.99',
    sku: '592_LDKDI',
    status: 'DRAFT',
    bg: 'bg-[#d8cdc4]',
    
  },
];

function Product() {
  return (
    <div className="p-8 bg-white min-h-screen text-slate-800">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Products</h1>
          <div className="flex gap-2 text-xs text-gray-500 mt-1">
            <span>Dashboard</span>
            <span>•</span>
            <span>Products</span>
            <span>•</span>
            <span className="text-gray-400">List</span>
          </div>
        </div>
        <button className="flex items-center gap-1 bg-indigo-600 text-white text-xs font-semibold px-3 py-2 rounded-lg">
          <span className="text-base leading-none">+</span> Add
        </button>
      </div>

      <div className="mb-4">
        <div className="flex items-center gap-2 text-gray-400 mb-2">
          <span className="text-gray-700 text-sm">🔍</span>
          <input
            type="text"
            placeholder="Search by product name"
            className="w-full text-sm outline-none text-slate-700 placeholder-gray-400 bg-transparent"
          />
        </div>
        <p className="text-xs text-gray-400">No filters applied</p>
      </div>

      <div className="flex gap-6 py-3 border-b border-gray-100 text-xs font-semibold text-slate-700">
        <div className="flex items-center gap-1 cursor-pointer">
          Category <span>⌄</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          Status <span>⌄</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          Stock <span>⌄</span>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100 text-[11px] font-bold text-gray-500 uppercase">
              <th className="py-3 px-2 w-6"></th>
              <th className="py-3 px-3">NAME</th>
              <th className="py-3 px-3">STOCK</th>
              <th className="py-3 px-3">PRICE</th>
              <th className="py-3 px-3">SKU</th>
              <th className="py-3 px-3">STATUS</th>
              <th className="py-3 px-3 text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-xs">
            {products.map((item) => (
              <tr key={item.id}>
                <td className="py-3 px-2 text-gray-400">
                  <span className="cursor-pointer font-bold">›</span>
                </td>
                <td className="py-3 px-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${item.bg} relative overflow-hidden`}>
                      {item.hasStripe && (
                        <div className="absolute right-0 top-0 bottom-0 w-2.5 bg-slate-800" />
                      )}
                      {item.hasIcon && (
                        <span className="text-gray-500 text-base"></span>
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800 text-sm">{item.name}</div>
                      <div className="text-gray-400 text-xs">{item.category}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-3">
                  <div className="w-6 h-1.5 bg-gray-200 rounded-full mb-1">
                    {item.isStockGreen ? (
                      <div className="w-full h-full bg-emerald-500 rounded-full"></div>
                    ) : (
                      <div className="w-3/4 h-full bg-red-300 rounded-full"></div>
                    )}
                  </div>
                  <span className="text-gray-400 text-xs">{item.stockText}</span>
                </td>
                <td className="py-3 px-3 font-medium text-slate-700">{item.price}</td>
                <td className="py-3 px-3 text-gray-500">{item.sku}</td>
                <td className="py-3 px-3">
                  {item.status === 'PUBLISHED' ? (
                    <span className="inline-block px-2 py-0.5 text-[10px] font-bold rounded bg-emerald-50 text-emerald-600">
                      PUBLISHED
                    </span>
                  ) : (
                    <span className="inline-block px-2 py-0.5 text-[10px] font-bold rounded bg-cyan-50 text-cyan-500">
                      DRAFT
                    </span>
                  )}
                </td>
                <td className="py-3 px-3 text-right">
                  <span className="text-gray-400 cursor-pointer font-bold tracking-widest">
                    •••
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end items-center gap-6 mt-4 text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <span>Rows per page:</span>
          <span className="font-semibold text-slate-800 cursor-pointer">5 ⌄</span>
        </div>
        <span>1–5 of 7</span>
        <div className="flex gap-4 text-sm text-gray-400">
          <span className="cursor-pointer select-none">‹</span>
          <span className="cursor-pointer select-none text-gray-700">›</span>
        </div>
      </div>
    </div>
  );
}

export default Product;