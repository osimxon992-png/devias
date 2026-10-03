import CustomerRow from "./CustomerRow";
import carson from "../../assets/carson.png";
import fran from "../../assets/fran.png";
import jie from "../../assets/jie.png";
import anika from "../../assets/anika.png";
import miron from "../../assets/miron.png";

const customers = [
  {
    id: 1,
    name: "Carson Darrin",
    email: "carson.darrin@devias.io",
    location: "Cleveland, Ohio, USA",
    orders: 3,
    spent: "$300.00",
    image: carson,
  },
  {
    id: 2,
    name: "Fran Perez",
    email: "fran.perez@devias.io",
    location: "Atlanta, Georgia, USA",
    orders: 0,
    spent: "$0.00",
    image: fran,
  },
  {
    id: 3,
    name: "Jie Yan Song",
    email: "jie.yan.song@devias.io",
    location: "North Canton, Ohio, USA",
    orders: 6,
    spent: "$5,600.00",
    image: jie,
  },
  {
    id: 4,
    name: "Anika Visser",
    email: "anika.visser@devias.io",
    location: "Madrid, Madrid, Spain",
    orders: 1,
    spent: "$500.00",
    image: anika,
  },
  {
    id: 5,
    name: "Miron Vitold",
    email: "miron.vitold@devias.io",
    location: "San Diego, California, USA",
    orders: 0,
    spent: "$0.00",
    image: miron,
  },
];

function CustomerTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 text-left">
            <th className="w-12 px-4 py-3">
              <input type="checkbox" />
            </th>

            <th className="px-4 py-3 text-[10px] font-semibold text-gray-500">
              NAME
            </th>

            <th className="px-4 py-3 text-[10px] font-semibold text-gray-500">
              LOCATION
            </th>

            <th className="px-4 py-3 text-[10px] font-semibold text-gray-500">
              ORDERS
            </th>

            <th className="px-4 py-3 text-[10px] font-semibold text-gray-500">
              SPENT
            </th>

            <th className="px-4 py-3 text-right text-[10px] font-semibold text-gray-500">
              ACTIONS
            </th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <CustomerRow key={customer.id} customer={customer} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerTable;
