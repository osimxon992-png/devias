import toggleImg from "../../assets/toggle.png";
import { LuUpload } from "react-icons/lu";

function ProductTwo() {
  return (
    <div className="p-8 bg-[#f9fafb] min-h-screen text-slate-800">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Create a new product</h1>
        <div className="flex gap-2 text-xs text-gray-500 mt-1">
          <span>Dashboard</span>
          <span>•</span>
          <span>Products</span>
          <span>•</span>
          <span className="text-gray-400">Create</span>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3">
            <h2 className="text-sm font-semibold text-slate-900">Basic details</h2>
          </div>
          <div className="w-full md:w-2/3 space-y-4">
            <div className="border border-gray-200 rounded-lg p-2.5">
              <input
                type="text"
                placeholder="Product Name"
                className="w-full text-xs outline-none text-slate-700 placeholder-gray-400 bg-transparent"
              />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Description</p>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="flex items-center gap-3 px-3 py-2 border-b border-gray-200 bg-white text-xs text-slate-700">
                  <span>Normal ▾</span>
                  <span className="font-bold">B</span>
                  <span className="italic">I</span>
                  <span className="underline">U</span>
                  <span>🔗</span>
                  <span>≡</span>
                  <span>⋮≡</span>
                  <span>Tx</span>
                </div>
                <input
                  type="text"
                  placeholder="Write something"
                  className="w-full p-3 text-xs outline-none text-slate-700 placeholder-gray-400 bg-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3">
            <h2 className="text-sm font-semibold text-slate-900">Images</h2>
            <p className="text-xs text-gray-400 mt-1">Images will appear in the store front of your website.</p>
          </div>
          <div className="w-full md:w-2/3">
            <div className="border border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center bg-[#fafafa]">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 mb-3">
                <LuUpload className="text-lg text-gray-600" />
              </div>
              <p className="text-xs text-gray-700">
                <span>Click to upload</span> or drag and drop
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3">
            <h2 className="text-sm font-semibold text-slate-900">Pricing</h2>
          </div>
          <div className="w-full md:w-2/3 space-y-4">
            <div className="border border-gray-200 rounded-lg p-2.5">
              <p className="text-[10px] text-gray-400">Old price</p>
              <input
                type="text"
                defaultValue="0"
                className="w-full text-xs outline-none text-slate-800 bg-transparent font-medium"
              />
            </div>
            <div className="border border-gray-200 rounded-lg p-2.5">
              <p className="text-[10px] text-gray-400">New Price</p>
              <input
                type="text"
                defaultValue="0"
                className="w-full text-xs outline-none text-slate-800 bg-transparent font-medium"
              />
            </div>
            <div className="flex items-center gap-3 pt-1">
              <img src={toggleImg} alt="toggle" className="w-8 h-4 object-contain cursor-pointer" />
              <span className="text-xs text-slate-700">Keep selling when stock is empty</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3">
            <h2 className="text-sm font-semibold text-slate-900">Category</h2>
          </div>
          <div className="w-full md:w-2/3 space-y-4">
            <div className="border border-gray-200 rounded-lg p-2.5 flex justify-between items-center cursor-pointer">
              <span className="text-xs text-slate-700">Category</span>
              <span className="text-xs text-gray-400">▾</span>
            </div>
            <div className="border border-gray-200 rounded-lg p-2.5">
              <p className="text-[10px] text-gray-400">Barcode</p>
              <input
                type="text"
                defaultValue="925487986526"
                className="w-full text-xs outline-none text-slate-800 bg-transparent"
              />
            </div>
            <div className="border border-gray-200 rounded-lg p-2.5">
              <p className="text-[10px] text-gray-400">SKU</p>
              <input
                type="text"
                defaultValue="IYV-8745"
                className="w-full text-xs outline-none text-slate-800 bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end items-center gap-4 mt-8">
        <button className="text-xs font-semibold text-slate-700 px-4 py-2 cursor-pointer">
          Cancel
        </button>
        <button className="text-xs font-semibold bg-indigo-600 text-white px-5 py-2 rounded-lg cursor-pointer">
          Create
        </button>
      </div>
    </div>
  );
}

export default ProductTwo;