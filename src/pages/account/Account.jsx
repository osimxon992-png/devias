import { IoRefresh } from "react-icons/io5";
import "./Account.css";

function Account() {
  return (
    <div>
      <section className="w-full h-auto min-h-[1546px] p-[64px_25px]">
        <div className="flex items-center justify-between mb-[25px]">
          <h1 className="plus font-bold text-[33.3px] text-[#111927]">
            E-Commerce
          </h1>
          <button className="p-[10px_20px_12px_16px] bg-[#6366F1] flex items-center gap-[8px] rounded-[12px] text-[#FFFFFF] inter font-semibold">
            <IoRefresh />
            Sync Data
          </button>
        </div>
      </section>
    </div>
  );
}

export default Account;
