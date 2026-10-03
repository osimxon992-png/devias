import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import carson from "../../assets/carson.png";
import fran from "../../assets/fran.png";
import jie from "../../assets/jie.png";
import anika from "../../assets/anika.png";
import miron from "../../assets/miron.png";

const customers = {
  1: {
    name: "Carson Darrin",
    email: "carson.darrin@devias.io",
    image: carson,
    phone: "+1 555 123 456",
    country: "USA",
    region: "Ohio",
    address1: "Cleveland",
    address2: "House #12",
  },
  2: {
    name: "Fran Perez",
    email: "fran.perez@devias.io",
    image: fran,
    phone: "+1 404 123 456",
    country: "USA",
    region: "Georgia",
    address1: "Atlanta",
    address2: "House #18",
  },
  3: {
    name: "Jie Yan Song",
    email: "jie.yan.song@devias.io",
    image: jie,
    phone: "+1 330 123 456",
    country: "USA",
    region: "Ohio",
    address1: "North Canton",
    address2: "House #21",
  },
  4: {
    name: "Anika Visser",
    email: "anika.visser@devias.io",
    image: anika,
    phone: "+34 612 123 456",
    country: "Spain",
    region: "Madrid",
    address1: "Madrid",
    address2: "House #15",
  },
  5: {
    name: "Miron Vitold",
    email: "miron.vitold@devias.io",
    image: miron,
    phone: "+55 748 327 439",
    country: "USA",
    region: "New York",
    address1: "New York",
    address2: "House #25",
  },
};

function CustomerEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const savedCustomers = customers;
  const customer = savedCustomers[id];
  JSON.parse(localStorage.getItem("customers")) || customers;

  const [form, setForm] = useState(customer);

  if (!customer) {
    return (
      <div className="min-h-screen bg-white p-8">
        <h1 className="text-2xl font-semibold text-red-500">
          Customer topilmadi
        </h1>

        <Link
          to="/customers"
          className="mt-5 inline-block rounded-lg bg-indigo-500 px-4 py-2 text-sm text-white"
        >
          Customers ga qaytish
        </Link>
      </div>
    );
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const updatedCustomers = {
      ...savedCustomers,
      [id]: form,
    };

    localStorage.setItem("customers", JSON.stringify(updatedCustomers));

    navigate(`/customers/details/${id}/details`);
  }

  return (
    <div className="min-h-screen bg-[#f8f9fb] p-6">
      <Link
        to={`/customers`}
        className="flex items-center gap-2 text-sm text-gray-700 hover:text-indigo-500"
      >
        ← Customers
      </Link>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={form.image}
            alt={form.name}
            className="h-12 w-12 rounded-full object-cover"
          />

          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              {form.email}
            </h1>

            <p className="mt-1 text-xs text-gray-500">
              user_id: 5e86805e2badf54f66cc9c53
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Link
            to={`/customers/edit/${id}/edit`}
            className="text-sm text-gray-700 hover:text-indigo-500"
          >
            Edit
          </Link>

          <button
            type="submit"
            form="customer-form"
            className="rounded-lg bg-indigo-500 px-5 py-2.5 text-sm text-white hover:bg-indigo-600"
          >
            Actions
          </button>
        </div>
      </div>

      <div className="mt-8 flex gap-6 border-b border-gray-200">
        <button className="border-b-2 border-indigo-500 pb-3 text-sm text-indigo-500">
          Edit Details
        </button>

        <button className="pb-3 text-sm text-gray-500">Invoices</button>

        <button className="pb-3 text-sm text-gray-500">Logs</button>
      </div>

      <form
        id="customer-form"
        onSubmit={handleSubmit}
        className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[260px_1fr]"
      >
        <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
          <div className="border-b border-gray-100 p-4">
            <h2 className="text-sm font-semibold text-gray-900">
              Basic Details
            </h2>
          </div>

          <div className="border-b border-gray-100 p-4">
            <label className="text-xs font-medium text-gray-800">Email</label>

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-2 h-9 w-full rounded-md border border-gray-200 px-2 text-xs text-gray-600 outline-none focus:border-indigo-500"
            />
          </div>

          <div className="border-b border-gray-100 p-4">
            <label className="text-xs font-medium text-gray-800">Phone</label>

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="mt-2 h-9 w-full rounded-md border border-gray-200 px-2 text-xs text-gray-600 outline-none focus:border-indigo-500"
            />
          </div>

          <div className="border-b border-gray-100 p-4">
            <label className="text-xs font-medium text-gray-800">Country</label>

            <input
              name="country"
              value={form.country}
              onChange={handleChange}
              className="mt-2 h-9 w-full rounded-md border border-gray-200 px-2 text-xs text-gray-600 outline-none focus:border-indigo-500"
            />
          </div>

          <div className="border-b border-gray-100 p-4">
            <label className="text-xs font-medium text-gray-800">
              State/Region
            </label>

            <input
              name="region"
              value={form.region}
              onChange={handleChange}
              className="mt-2 h-9 w-full rounded-md border border-gray-200 px-2 text-xs text-gray-600 outline-none focus:border-indigo-500"
            />
          </div>

          <div className="border-b border-gray-100 p-4">
            <label className="text-xs font-medium text-gray-800">
              Address 1
            </label>

            <input
              name="address1"
              value={form.address1}
              onChange={handleChange}
              className="mt-2 h-9 w-full rounded-md border border-gray-200 px-2 text-xs text-gray-600 outline-none focus:border-indigo-500"
            />
          </div>

          <div className="p-4">
            <label className="text-xs font-medium text-gray-800">
              Address 2
            </label>

            <input
              name="address2"
              value={form.address2}
              onChange={handleChange}
              className="mt-2 h-9 w-full rounded-md border border-gray-200 px-2 text-xs text-gray-600 outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="space-y-5">
          <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
            <div className="border-b border-gray-100 p-4">
              <h2 className="text-sm font-semibold">Payment</h2>
            </div>

            <div className="grid grid-cols-[130px_1fr] border-b border-gray-100 p-4 text-xs">
              <span>Credit Card</span>
              <span className="text-gray-400">•••• •••• •••• 4142</span>
            </div>

            <div className="grid grid-cols-[130px_1fr] border-b border-gray-100 p-4 text-xs">
              <span>Paid</span>
              <span className="text-gray-400">2 ($50.00)</span>
            </div>

            <div className="grid grid-cols-[130px_1fr] border-b border-gray-100 p-4 text-xs">
              <span>Draft</span>
              <span className="text-gray-400">1 ($5.00)</span>
            </div>

            <div className="grid grid-cols-[130px_1fr] border-b border-gray-100 p-4 text-xs">
              <span>Unpaid/Due</span>
              <span className="text-gray-400">1 ($12.00)</span>
            </div>

            <div className="grid grid-cols-[130px_1fr] border-b border-gray-100 p-4 text-xs">
              <span>Refunded</span>
              <span className="text-gray-400">0 ($0.00)</span>
            </div>

            <div className="grid grid-cols-[130px_1fr] p-4 text-xs">
              <span>Gross Income</span>
              <span className="text-gray-400">$1,200.00</span>
            </div>
            <div className="grid grid-cols-[130px_1fr] p-4 text-xs">
              <button className="font-medium pl-1 py-2.5 cursor-pointer border-[2px] rounded-[12px] border-blue-300 text-blue-400">
                Create Invoice
              </button>
            </div>
            <div className="grid grid-cols-[440px_1fr] p-4 -mt-17 text-xs">
              <button className="font-medium pl-1 py-2.5 cursor-pointer text-blue-600">
                Resend Due Invoices
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
            <div className="p-4">
              <h2 className="text-sm font-semibold">Emails</h2>

              <div className="mt-3 flex gap-3">
                <select className="h-9 w-48 rounded-md border border-gray-200 px-3 text-xs">
                  <option>Resend last invoice</option>
                  <option>Send payment reminder</option>
                  <option>Send welcome email</option>
                </select>

                <button
                  type="button"
                  className="rounded-lg bg-indigo-500 px-4 text-xs text-white"
                >
                  Send email →
                </button>
              </div>
            </div>

            <div className="border-t border-gray-100">
              <div className="grid grid-cols-2 bg-gray-50 p-3 text-[10px] font-semibold text-gray-500">
                <span>MAIL TYPE</span>
                <span>DATE</span>
              </div>

              <div className="grid grid-cols-2 border-t border-gray-100 p-3 text-xs">
                <span>Order confirmation</span>
                <span className="text-gray-500">29/01/2024 | 09:45</span>
              </div>

              <div className="grid grid-cols-2 border-t border-gray-100 p-3 text-xs">
                <span>Order confirmation</span>
                <span className="text-gray-500">28/01/2024 | 03:30</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
            <h2 className="text-sm font-semibold">Data Management</h2>

            <button
              type="button"
              className="mt-4 rounded-lg border border-red-300 px-4 py-2 text-xs text-red-500"
            >
              Delete Account
            </button>

            <p className="mt-3 text-xs leading-5 text-gray-400">
              Remove this customer's chart if requested that, if not please be
              aware that what has been deleted can never brought back.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CustomerEdit;
