import CustomerTabs from "../../components/customers/CustomerTabs";
import CustomerSearch from "../../components/customers/CustomerSearch";
import CustomerTable from "../../components/customers/CustomerTable";
import CustomerPagination from "../../components/customers/CustomerPagination";

function Customers() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] p-6">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-[#111827]">Customers</h1>

          <div className="mt-2 flex gap-4">
            <button className="text-xs font-medium text-[#111827] hover:underline">
              ⇧ Import
            </button>

            <button className="text-xs font-medium text-[#111827] hover:underline">
              ⇩ Export
            </button>
          </div>
        </div>

        <button className="rounded-lg bg-[#6366f1] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#5558e8]">
          + Add
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
        <CustomerTabs />

        <CustomerSearch />

        <CustomerTable />

        <CustomerPagination />
      </div>
    </div>
  );
}

export default Customers;
