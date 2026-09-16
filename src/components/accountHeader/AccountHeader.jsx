import { IoRefresh } from "react-icons/io5";

function AccountHeader() {
  return (
    <div>
      <div className="flex items-center justify-between mb-[25px]">
        <h1 className="plus font-bold text-[33.3px] text-[#111927]">
          E-Commerce
        </h1>
        <button className="p-[10px_20px_12px_16px] bg-[#6366F1] flex items-center gap-[8px] rounded-[12px] text-[#FFFFFF] inter font-semibold">
          <IoRefresh />
          Sync Data
        </button>
      </div>
    </div>
  );
}

export default AccountHeader;
