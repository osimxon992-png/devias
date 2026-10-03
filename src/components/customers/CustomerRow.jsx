import { Link } from "react-router-dom";

function CustomerRow({ customer }) {
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50">
      <td className="px-4 py-3">
        <input type="checkbox" />
      </td>

      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src={customer.image}
            alt={customer.name}
            className="h-9 w-9 rounded-full object-cover"
          />

          <div>
            <p className="text-xs font-medium text-gray-800">{customer.name}</p>

            <p className="mt-0.5 text-[10px] text-gray-400">{customer.email}</p>
          </div>
        </div>
      </td>

      <td className="px-4 py-3 text-xs text-gray-600">{customer.location}</td>

      <td className="px-4 py-3 text-xs text-gray-600">{customer.orders}</td>

      <td className="px-4 py-3 text-xs text-gray-700">{customer.spent}</td>

      <td className="px-4 py-3">
        <div className="flex justify-end gap-4">
          <Link
            to={`/customers/details/${customer.id}/details`}
            className="text-gray-600 hover:text-indigo-500"
          >
            /
          </Link>

          <Link
            to={`/customers/edit/${customer.id}/edit`}
            className="text-gray-600 hover:text-indigo-500"
          >
            -
          </Link>
        </div>
      </td>
    </tr>
  );
}

export default CustomerRow;
