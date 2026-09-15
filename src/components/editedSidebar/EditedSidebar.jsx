import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import logo from "../../assets/Link.png";
import "./EditedSiderbar.css";
import { BiHomeSmile } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdOutlineAnalytics } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";
import { CiBitcoin } from "react-icons/ci";
import { TbUsers } from "react-icons/tb";

function EditedSidebar() {
  return (
    <div>
      <div className="w-[280px] h-[1106px] p-[24px_32px_24px_24px] bg-[#1C2536]">
        <div className="flex items-center mb-[30px]">
          <img className="mr-[16px]" src={logo} alt="" />
          <div className="mr-[75px]">
            <h2 className="plus text-[16.7px] font-bold text-[#FFFFFF]">
              Devias
            </h2>
            <p className="inter font-normal text-[14px] text-[#9DA4AE]">
              Production
            </p>
          </div>
          <FaAngleDown className="text-[25px] text-[#6C737F]" />
        </div>
        <div className="flex items-center gap-[16px] mb-[20px]">
          <BiHomeSmile className="text-[25px] text-[#9DA4AE]" />
          <Link
            to={"/"}
            className="inter font-semibold text-[18px] text-[#9DA4AE]"
          >
            Overview
          </Link>
        </div>
        <div className="flex items-center gap-[16px] mb-[20px]">
          <MdOutlineAnalytics className="text-[25px] text-[#9DA4AE]" />
          <Link
            to={"/"}
            className="inter font-semibold text-[18px] text-[#9DA4AE]"
          >
            Analytics
          </Link>
        </div>
        <div className="flex items-center gap-[16px] mb-[20px]">
          <IoAnalytics className="text-[25px] text-[#9DA4AE]" />
          <Link
            to={"/"}
            className="inter font-semibold text-[18px] text-[#9DA4AE]"
          >
            E-Commerce
          </Link>
        </div>
        <div className="flex items-center gap-[16px] mb-[20px]">
          <CiBitcoin className="text-[25px] text-[#9DA4AE]" />
          <Link
            to={"/"}
            className="inter font-semibold text-[18px] text-[#9DA4AE]"
          >
            Crypto
          </Link>
          <div className="w-[44px] h-[28px] rounded-[16px] bg-[#6366F1] flex items-center justify-center text-[#FFFFFF] ml-[70px]">
            New
          </div>
        </div>
        <div className="flex items-center gap-[16px] mb-[30px]">
          <BiHomeSmile className="text-[25px] text-[#9DA4AE]" />
          <Link
            to={"/"}
            className="inter font-semibold text-[18px] text-[#9DA4AE]"
          >
            Account
          </Link>
        </div>
        <h2 className="uppercase font-bold inter text-[14px] text-[#9DA4AE] mb-[23px]">
          Concepts
        </h2>
        <div className="flex items-center gap-[16px] mb-[30px]">
          <TbUsers className="text-[25px] text-[#9DA4AE]" />
          <Link
            to={"/"}
            className="inter font-semibold text-[18px] text-[#9DA4AE]"
          >
            Customers
          </Link>
          <FaAngleRight className="ml-[55px] text-[20px] text-[#4D5761]" />
        </div>
      </div>
    </div>
  );
}

export default EditedSidebar;
