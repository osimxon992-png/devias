import { useState } from "react";

import anika from "../assets/anika.png";
import miron from "../assets/miron.png";
import antonio from "../assets/antonio.png";
import durden from "../assets/durden.png";
import menu from "../assets/menu.png";
import call from "../assets/call.png";
import photo from "../assets/photo.png";
import options from "../assets/options.png";
import send from "../assets/send.png";
import cameras from "../assets/cameras.png";
import attachment from "../assets/attachment.png";
import inch from "../assets/inch.png";

function Chats() {
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Miron Vitold",
      text: "Hey, nice projects! I really liked the one in react. What's your quote on kinda similar project?",
      image: miron,
      mine: false,
      time: "4 days ago",
    },
    {
      id: 2,
      sender: "Anika Visser",
      text: "I would need to know more details, but my hourly rate starts at $35/hour. Thanks!",
      image: anika,
      mine: true,
      time: "4 days ago",
    },
    {
      id: 3,
      sender: "Miron Vitold",
      text: "Well it's a really easy one, I'm sure we can make it half of the price.",
      image: miron,
      mine: false,
      time: "6 hours ago",
    },
    {
      id: 4,
      sender: "Anika Visser",
      text: "Then why don't you make it if it's that easy? Sorry I'm not interested, have fantastic day Adam!",
      image: anika,
      mine: true,
      time: "4 hours ago",
    },
    {
      id: 5,
      sender: "Miron Vitold",
      text: "Last offer, $25 per hour",
      image: miron,
      mine: false,
      time: "",
    },
  ]);

  const contacts = [
    {
      id: 1,
      name: "Miron Vitold",
      image: miron,
      time: "2h",
      lastMessage: "Sent a photo",
    },
    {
      id: 2,
      name: "Alcides Antonio, Nasimiyu D...",
      images: [durden, antonio],
      time: "1d",
      lastMessage: "Hello everyone ",
    },
  ];

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase()),
  );

  function handleSend() {
    if (!message.trim()) return;

    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        sender: "Anika Visser",
        text: message,
        image: anika,
        mine: true,
        time: "now",
      },
    ]);

    setMessage("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSend();
    }
  }

  return (
    <div className="flex h-screen bg-white">
      <div className="w-[275px] shrink-0 border-r border-gray-100">
        <div className="flex h-[54px] items-center justify-between px-3">
          <h1 className="text-lg font-semibold text-gray-900">Chats</h1>

          <button className="rounded-lg bg-indigo-500 px-4 py-2 text-xs text-white">
            + Group
          </button>
        </div>

        <div className="px-3 py-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search contacts"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-10 w-full rounded-md border border-gray-200 pl-9 pr-3 text-[10px] outline-none focus:border-indigo-400"
            />

            <img
              src={inch}
              alt=""
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
            />
          </div>
        </div>

        {filteredContacts.map((contact) => (
          <button
            key={contact.id}
            className="mb-1 flex w-full items-center gap-2 rounded-xl px-3 py-3 text-left"
          >
            {contact.images ? (
              <div className="flex -space-x-2">
                {contact.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt=""
                    className="h-7 w-7 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
            ) : (
              <img
                src={contact.image}
                alt=""
                className="h-8 w-8 rounded-full object-cover"
              />
            )}

            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <p className="truncate text-[10px] font-medium text-gray-800">
                  {contact.name}
                </p>

                <span className="text-[9px] text-gray-400">{contact.time}</span>
              </div>

              <p className="mt-1 truncate text-[9px] text-gray-500">
                {contact.lastMessage}
              </p>
            </div>
          </button>
        ))}
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-[54px] items-center justify-between border-b border-gray-100 px-4">
          <div className="flex items-center gap-3">
            <button>
              <img src={menu} alt="" className="h-4 w-4" />
            </button>

            <img
              src={miron}
              alt=""
              className="h-8 w-8 rounded-full object-cover"
            />

            <div>
              <p className="text-[11px] font-medium text-gray-800">
                Miron Vitold
              </p>

              <p className="mt-0.5 text-[9px] text-gray-500">
                Last active 2 hours ago
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <button>
              <img src={call} alt="" className="h-7 w-7" />
            </button>

            <button>
              <img src={photo} alt="" className="h-5 w-5" />
            </button>

            <button>
              <img src={options} alt="" className="h-7 w-7" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          <div className="space-y-5">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.mine ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`flex max-w-[65%] items-start gap-2 ${
                    msg.mine ? "flex-row-reverse" : ""
                  }`}
                >
                  <img
                    src={msg.image}
                    alt=""
                    className="h-7 w-7 rounded-full object-cover"
                  />

                  <div>
                    <div
                      className={`rounded-2xl px-3 py-2 ${
                        msg.mine
                          ? "bg-indigo-500 text-white"
                          : "bg-white shadow-[0_2px_15px_rgba(0,0,0,0.06)]"
                      }`}
                    >
                      <p
                        className={`mb-1 text-[9px] font-medium ${
                          msg.mine ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {msg.sender}
                      </p>

                      <p
                        className={`text-[11px] leading-5 ${
                          msg.mine ? "text-white" : "text-gray-700"
                        }`}
                      >
                        {msg.text}
                      </p>
                    </div>

                    {msg.time && (
                      <p
                        className={`mt-1 text-[8px] text-gray-400 ${
                          msg.mine ? "text-right" : "text-left"
                        }`}
                      >
                        {msg.time}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-100 px-4 py-3">
          <div className="flex items-center gap-3">
            <img
              src={anika}
              alt=""
              className="h-7 w-7 rounded-full object-cover"
            />

            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Leave a message"
              className="h-8 flex-1 rounded-md border border-gray-200 px-3 text-[10px] outline-none focus:border-indigo-400"
            />

            <button onClick={handleSend}>
              <img src={send} alt="" className="h-7 w-7" />
            </button>

            <button>
              <img src={cameras} alt="" className="h-5 w-5" />
            </button>

            <button>
              <img src={attachment} alt="" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chats;
