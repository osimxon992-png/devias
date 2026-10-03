import { Link, useNavigate, useParams } from "react-router-dom";
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

  const savedCustomers =
    JSON.parse(localStorage.getItem("customers")) || customers;

  const customer = savedCustomers[id];

  const [form, setForm] = useState(customer || {});
  const [publicInfo, setPublicInfo] = useState(true);
  const [available, setAvailable] = useState(false);

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
    <div className="min-h-screen bg-white px-6 py-10">
      <Link
        to="/customers"
        className="mx-auto flex max-w-[860px] items-center gap-2 text-xs text-gray-700 hover:text-indigo-500"
      >
        <span className="text-lg">←</span>
        Customers
      </Link>

      <div className="mx-auto mt-8 flex max-w-[860px] items-center gap-3">
        <img
          src={form.image}
          alt={form.name}
          className="h-12 w-12 rounded-full object-cover"
        />

        <div>
          <h1 className="text-[26px] font-semibold leading-none text-gray-900">
            {form.email}
          </h1>

          <div className="mt-2 flex items-center gap-2">
            <span className="text-[11px] text-gray-700">user_id:</span>

            <span className="rounded-full bg-gray-200 px-2 py-0.5 text-[9px] text-gray-600">
              5e86805e2badf54f66cc9c53
            </span>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-7 max-w-[860px] overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
      >
        <div className="px-4 pt-6">
          <h2 className="text-sm font-semibold text-gray-900">Edit Customer</h2>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-4 px-4 pt-4">
          <div className="relative">
            <label className="absolute left-2 top-[-6px] bg-white px-1 text-[9px] text-gray-500">
              Full name *
            </label>

            <input
              name="name"
              value={form.name || ""}
              onChange={handleChange}
              className="h-10 w-full rounded-md border border-gray-200 px-2 text-[11px] text-gray-800 outline-none focus:border-indigo-500"
            />
          </div>

          <div className="relative">
            <label className="absolute left-2 top-[-6px] bg-white px-1 text-[9px] text-gray-500">
              Email address *
            </label>

            <div className="relative">
              <input
                name="email"
                value={form.email || ""}
                onChange={handleChange}
                className="h-10 w-full rounded-md border border-gray-200 px-2 pr-9 text-[11px] text-gray-800 outline-none focus:border-indigo-500"
              />

              <span className="absolute right-3 top-3 text-xs text-teal-500">
                ✉
              </span>
            </div>
          </div>

          <div className="relative">
            <label className="absolute left-2 top-[-6px] bg-white px-1 text-[9px] text-gray-500">
              Country
            </label>

            <input
              name="country"
              value={form.country || ""}
              onChange={handleChange}
              className="h-10 w-full rounded-md border border-gray-200 px-2 text-[11px] text-gray-800 outline-none focus:border-indigo-500"
            />
          </div>

          <div className="relative">
            <label className="absolute left-2 top-[-6px] bg-white px-1 text-[9px] text-gray-500">
              State/Region
            </label>

            <input
              name="region"
              value={form.region || ""}
              onChange={handleChange}
              className="h-10 w-full rounded-md border border-gray-200 px-2 text-[11px] text-gray-800 outline-none focus:border-indigo-500"
            />
          </div>

          <div className="relative">
            <label className="absolute left-2 top-[-6px] bg-white px-1 text-[9px] text-gray-500">
              Address 1
            </label>

            <input
              name="address1"
              value={form.address1 || ""}
              onChange={handleChange}
              className="h-10 w-full rounded-md border border-gray-200 px-2 text-[11px] text-gray-800 outline-none focus:border-indigo-500"
            />
          </div>

          <div className="relative">
            <label className="absolute left-2 top-[-6px] bg-white px-1 text-[9px] text-gray-500">
              Address 2
            </label>

            <input
              name="address2"
              value={form.address2 || ""}
              onChange={handleChange}
              className="h-10 w-full rounded-md border border-gray-200 px-2 text-[11px] text-gray-800 outline-none focus:border-indigo-500"
            />
          </div>

          <div className="relative">
            <label className="absolute left-2 top-[-6px] bg-white px-1 text-[9px] text-gray-500">
              Phone number
            </label>

            <input
              name="phone"
              value={form.phone || ""}
              onChange={handleChange}
              className="h-10 w-full rounded-md border border-gray-200 px-2 text-[11px] text-gray-800 outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="mx-4 mt-5 border-b border-gray-100 pb-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xs font-medium text-gray-900">
                Make Contact Info Public
              </h3>

              <p className="mt-3 text-[10px] text-gray-500">
                Means that anyone viewing your profile will be able to see your
                contacts details
              </p>
            </div>

            <button
              type="button"
              onClick={() => setPublicInfo(!publicInfo)}
              className={`relative h-4 w-7 rounded-full transition ${
                publicInfo ? "bg-indigo-300" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-[-2px] h-5 w-5 rounded-full shadow-sm transition ${
                  publicInfo
                    ? "right-[-1px] bg-indigo-500"
                    : "left-[-1px] bg-gray-500"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="mx-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xs font-medium text-gray-900">
                Available to hire
              </h3>

              <p className="mt-3 text-[10px] text-gray-500">
                Toggling this will let your teammates know that you are
                available for acquiring new projects
              </p>
            </div>

            <button
              type="button"
              onClick={() => setAvailable(!available)}
              className={`relative h-4 w-7 rounded-full transition ${
                available ? "bg-indigo-300" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-[-2px] h-5 w-5 rounded-full shadow-sm transition ${
                  available
                    ? "right-[-1px] bg-indigo-500"
                    : "left-[-1px] bg-gray-500"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-7 px-4 pb-5 pt-1">
          <button
            type="submit"
            className="rounded-lg bg-indigo-500 px-5 py-2 text-xs font-medium text-white shadow-sm hover:bg-indigo-600"
          >
            Update
          </button>

          <Link
            to={`/customers/details/${id}/details`}
            className="text-xs font-medium text-gray-800 hover:text-indigo-500"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

export default CustomerEdit;
