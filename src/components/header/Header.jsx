import { CiSearch } from "react-icons/ci";
import uk from "../../assets/Clip path group.png";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TbUsers } from "react-icons/tb";
import opa from "../../assets/div.MuiAvatar-root.png";

function Header() {
  return (
    <div>
      <header className="w-full h-[64px] flex items-center justify-between p-[12px_16px]">
        <CiSearch className="text-[20px] text-[#6C737F]" />
        <div className="flex items-center gap-[26px]">
          <img src={uk} alt="" />
          <IoMdNotificationsOutline className="text-[20px] text-[#6C737F]" />
          <TbUsers className="text-[20px] text-[#6C737F]" />
          <div className="w-[40px] h-[40px] rounded-[50%] border border-[#F2F4F7] flex items-center justify-center">
            <img src={opa} alt="" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
