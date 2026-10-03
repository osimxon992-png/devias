import { useState } from "react";
import rait from "../assets/rait.png";
import nigga from "../assets/nigga.png";
import asian from "../assets/asian.png";
import mbap from "../assets/mbap.png";
import Frame from "../assets/Frame.png";
import menu from "../assets/menu.png";
import important from "../assets/important.png";
import inch from "../assets/inch.png";
import left from "../assets/left.png";
import right from "../assets/right.png";
import refresh from "../assets/refresh.png";
import more from "../assets/more.png";
import maximize from "../assets/maximize.png";
import close from "../assets/close.png";
import attach from "../assets/attach.png";
import attachment from "../assets/attachment.png";

function Mail() {
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");

  const emails = [
    {
      id: 1,
      name: "Marcus Finn",
      subject: "Website redesign",
      text: "Hi Matt, I saw your work on Instagram and would be interested in getting a quote for Logo and slide...",
      avatar: rait,
    },
    {
      id: 2,
      name: "Miron Vitold",
      subject: "Amazing work",
      text: "Hey, nice projects! I really liked the one in react. What's your quote on kinda similar project?",
      avatar: nigga,
    },
    {
      id: 3,
      name: "Penjani Inyene",
      subject: "Flight reminder",
      text: "Dear Anika, Your flight is coming up soon. Please don't forget to check in for your scheduled flight.",
      avatar: asian,
    },
    {
      id: 4,
      name: "Carson Darrin",
      subject: "Possible candidates for...",
      avatar: mbap,
    },
  ];

  const filteredEmails = emails.filter(
    (email) =>
      email.name.toLowerCase().includes(search.toLowerCase()) ||
      email.subject.toLowerCase().includes(search.toLowerCase()),
  );

  const allSelected =
    filteredEmails.length > 0 &&
    filteredEmails.every((email) => selected.includes(email.id));

  function handleSelectAll() {
    if (allSelected) {
      setSelected(
        selected.filter(
          (id) => !filteredEmails.some((email) => email.id === id),
        ),
      );
    } else {
      setSelected([
        ...new Set([...selected, ...filteredEmails.map((email) => email.id)]),
      ]);
    }
  }

  function handleSelect(id) {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  }

  return (
    <div className="relative min-h-screen bg-white">
      <div className="flex h-11 items-center justify-between border-b border-gray-100 px-4">
        <button>
          <img src={menu} alt="" className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search email"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-7 w-32 rounded-md border border-gray-200 pl-7 pr-2 text-[10px] outline-none focus:border-indigo-400"
            />

            <img
              src={inch}
              alt=""
              className="absolute left-2 top-1/2 h-3 w-3 -translate-y-1/2"
            />
          </div>

          <span className="text-[10px] text-gray-400">
            1 - {filteredEmails.length} of {emails.length}
          </span>

          <button>
            <img src={left} alt="" className="h-3 w-3" />
          </button>

          <button>
            <img src={right} alt="" className="h-3 w-3" />
          </button>

          <button>
            <img src={refresh} alt="" className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex h-12 items-center justify-between border-b border-gray-100 px-4">
        <label className="flex cursor-pointer items-center gap-2 text-[10px]">
          <input
            type="checkbox"
            checked={allSelected}
            onChange={handleSelectAll}
            className="h-4 w-4 cursor-pointer"
          />
          Select all
        </label>

        <button>
          <img src={more} alt="" className="h-4 w-4" />
        </button>
      </div>

      <div>
        {filteredEmails.map((email) => {
          const isSelected = selected.includes(email.id);

          return (
            <div
              key={email.id}
              className={`flex h-14 items-center border-b border-gray-100 px-4 hover:bg-gray-50 ${
                isSelected ? "bg-gray-50" : ""
              }`}
            >
              <div className="w-8">
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => handleSelect(email.id)}
                  className="h-4 w-4 cursor-pointer"
                />
              </div>

              <button className="mr-3">
                <img src={Frame} alt="" className="h-4 w-4" />
              </button>

              <button className="mr-4">
                <img src={important} alt="" className="h-7 w-7" />
              </button>

              <img
                src={email.avatar}
                alt={email.name}
                className="mr-3 h-7 w-7 rounded-full object-cover"
              />

              <div className="w-28 shrink-0">
                <p className="text-[10px] font-medium text-gray-800">
                  {email.name}
                </p>
              </div>

              <div className="flex min-w-0 items-center gap-1 text-[10px]">
                <span className="font-semibold text-gray-800">
                  {email.subject}
                </span>

                <span className="truncate text-gray-400">— {email.text}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute top-60 right-97 w-[470px] overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-100">
        <div className="flex  h-11 items-center justify-between border-b border-gray-100 px-3">
          <h2 className="text-xs font-semibold text-gray-800">New Message</h2>

          <div className="flex items-center gap-4">
            <button>
              <img src={maximize} alt="" className="h-7 w-6" />
            </button>

            <button>
              <img src={close} alt="" className="h-7 w-6" />
            </button>
          </div>
        </div>

        <input
          type="text"
          placeholder="To"
          className="h-10 w-full border-b border-gray-100 px-3 text-[10px] outline-none"
        />

        <input
          type="text"
          placeholder="Subject"
          className="h-10 w-full border-b border-gray-100 px-3 text-[10px] outline-none"
        />

        <div className="flex h-9 items-center gap-4 border-b border-gray-100 px-3 text-[10px] text-gray-600">
          <span>Normal</span>
          <span>⌄</span>
          <b>B</b>
          <i>I</i>
          <u>U</u>
          <span>↗</span>
          <span>☷</span>
          <span>≡</span>
          <span>Tx</span>
        </div>

        <textarea
          placeholder="Leave a message"
          className="h-32 w-full resize-none px-3 py-3 text-[10px] outline-none"
        />

        <div className="flex h-12 items-center justify-between border-t border-gray-100 px-3">
          <div className="flex gap-4">
            <button>
              <img src={attach} alt="" className="h-7 w-6" />
            </button>

            <button>
              <img src={attachment} alt="" className="h-7 w-6" />
            </button>
          </div>

          <button className="rounded-lg bg-indigo-500 px-5 py-2 text-[10px] text-white">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mail;
