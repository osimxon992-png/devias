function CustomerTabs() {
  const tabs = ["All", "Accepts Marketing", "Prospect", "Returning"];

  return (
    <div className="flex h-12 items-end gap-6 border-b border-gray-100 px-4">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={`relative h-full text-xs font-medium ${
            index === 0 ? "text-[#6366f1]" : "text-gray-500 hover:text-gray-800"
          }`}
        >
          {tab}

          {index === 0 && (
            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#6366f1]" />
          )}
        </button>
      ))}
    </div>
  );
}

export default CustomerTabs;
