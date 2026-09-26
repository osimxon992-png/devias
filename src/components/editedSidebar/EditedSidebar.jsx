import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import logo from "../../assets/Link.png";
import "./EditedSiderbar.css";
import { BiHomeSmile, BiSelectMultiple } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdOutlineAnalytics } from "react-icons/md";
import { IoAnalytics, IoShareSocialOutline } from "react-icons/io5";
import { CiBitcoin, CiBookmarkCheck, CiShoppingCart } from "react-icons/ci";
import { TbUsers } from "react-icons/tb";
import { FiShoppingBag, FiShoppingCart } from "react-icons/fi";
import { HiOutlineClipboardList, HiOutlineTruck } from "react-icons/hi";
import { PiChats, PiGraduationCapThin } from "react-icons/pi";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { LuCircleFadingArrowUp } from "react-icons/lu";
import { useState } from "react";

function EditedSidebar() {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(true);
  const [third, setThird] = useState(true);
  const [fourth, setFourth] = useState(true);
  const [fifth, setFifth] = useState(true);
  const [sixth, setSixth] = useState(true);
  const [seventh, setSeventh] = useState(true);
  const [socialMedia, setSocialMedia] = useState(true);
  const [order, setOrder] = useState(true);
  return (
    <div className="h-full">
      <div className="w-[280px] min-h-screen h-full p-[24px_32px_24px_24px] bg-[#1C2536]">
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
            to={"/analytics"}
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
        <div
          className={`flex items-center justify-between ${second ? "mb-[30px]" : "mb-[20px]"}`}
        >
          <TbUsers className="text-[25px] text-[#9DA4AE]" />
          <Link
            to={"/"}
            className="inter font-semibold text-[18px] text-[#9DA4AE] w-[150px]"
          >
            Customers
          </Link>
          {second ? (
            <FaAngleRight
              className="text-[20px] text-[#4D5761] cursor-pointer"
              onClick={() => setSecond(!second)}
            />
          ) : (
            <FaAngleDown
              className="text-[20px] text-[#4D5761] cursor-pointer"
              onClick={() => setSecond(!second)}
            />
          )}
        </div>
        <Link
          className={`inter font-medium text-[#9DA4AE] ml-[40px] mb-[25px] ${second ? "hidden" : "block"}`}
        >
          List
        </Link>
        <Link
          className={`inter font-medium text-[#9DA4AE] ml-[40px] mb-[25px] ${second ? "hidden" : "block"}`}
        >
          Details
        </Link>
        <Link
          className={`inter font-medium text-[#9DA4AE] ml-[40px] mb-[25px] ${second ? "hidden" : "block"}`}
        >
          Edit
        </Link>
        <div
          className={`flex items-center justify-between ${third ? "mb-[30px]" : "mb-[20px]"}`}
        >
          <FiShoppingBag className="text-[25px] text-[#9DA4AE]" />
          <Link
            to={"/"}
            className="inter font-semibold text-[18px] text-[#9DA4AE] w-[150px]"
          >
            Products
          </Link>
          {third ? (
            <FaAngleRight
              className="text-[20px] text-[#4D5761] cursor-pointer"
              onClick={() => setThird(!third)}
            />
          ) : (
            <FaAngleDown
              className="text-[20px] text-[#4D5761] cursor-pointer"
              onClick={() => setThird(!third)}
            />
          )}
        </div>
        <Link
          className={`inter font-medium text-[#9DA4AE] ml-[40px] mb-[25px] ${third ? "hidden" : "block"}`}
        >
          List
        </Link>
        <Link
          className={`inter font-medium text-[#9DA4AE] ml-[40px] mb-[25px] ${third ? "hidden" : "block"}`}
        >
          Create
        </Link>
        <div
          className={`flex items-center justify-between ${order ? "mb-[30px]" : "mb-[20px]"}`}
        >
          <CiShoppingCart className="text-[25px] text-[#9DA4AE]" />
          <Link
            to={"/"}
            className="inter font-semibold text-[18px] text-[#9DA4AE] w-[150px]"
          >
            Order
          </Link>
          {order ? (
            <FaAngleRight
              className="text-[20px] text-[#4D5761] cursor-pointer"
              onClick={() => setOrder(!order)}
            />
          ) : (
            <FaAngleDown
              className="text-[20px] text-[#4D5761] cursor-pointer"
              onClick={() => setOrder(!order)}
            />
          )}
        </div>
        <Link
          className={`inter font-medium text-[#9DA4AE] ml-[40px] mb-[25px] ${order ? "hidden" : "block"}`}
          to={"/order"}
        >
          List
        </Link>
        <Link
          className={`inter font-medium text-[#9DA4AE] ml-[40px] mb-[25px] ${order ? "hidden" : "block"}`}
          to={"/orderTwo"}
        >
          Details
        </Link>
        <div
          className={`flex items-center justify-between ${fifth ? "mb-[30px]" : "mb-[20px]"}`}
        >
          <CiBookmarkCheck className="text-[25px] text-[#9DA4AE]" />
          <Link
            to={"/"}
            className="inter font-semibold text-[18px] text-[#9DA4AE] w-[150px]"
          >
            Invoices
          </Link>
          {fifth ? (
            <FaAngleRight
              className="text-[20px] text-[#4D5761] cursor-pointer"
              onClick={() => setFifth(!fifth)}
            />
          ) : (
            <FaAngleDown
              className="text-[20px] text-[#4D5761] cursor-pointer"
              onClick={() => setFifth(!fifth)}
            />
          )}
        </div>
        <Link
          to={"/invoices"}
          className={`inter font-medium text-[#9DA4AE] ml-[40px] mb-[25px] ${fifth ? "hidden" : "block"}`}
        >
          List
        </Link>
        <Link
          to={"/invoicesTwo"}
          className={`inter font-medium text-[#9DA4AE] ml-[40px] mb-[25px] ${fifth ? "hidden" : "block"}`}
        >
          Details
        </Link>
        <div
          className={`flex items-center justify-between ${fourth ? "mb-[30px]" : "mb-[20px]"}`}
        >
          <HiOutlineTruck className="text-[25px] text-[#9DA4AE]" />
          <Link
            to={"/"}
            className="inter font-semibold text-[18px] text-[#9DA4AE] w-[150px]"
          >
            Logistics
          </Link>
          {fourth ? (
            <FaAngleRight
              className="text-[20px] text-[#4D5761] cursor-pointer"
              onClick={() => setFourth(!fourth)}
            />
          ) : (
            <FaAngleDown
              className="text-[20px] text-[#4D5761] cursor-pointer"
              onClick={() => setFourth(!fourth)}
            />
          )}
        </div>
        <Link
          className={`inter font-medium text-[#9DA4AE] ml-[40px] mb-[25px] ${fourth ? "hidden" : "block"}`}
        >
          Dashboard
        </Link>
        <Link
          className={`inter font-medium text-[#9DA4AE] ml-[40px] mb-[25px] ${fourth ? "hidden" : "block"}`}
        >
          Fleet
        </Link>
        <div
          className={`flex items-center justify-between ${second ? "mb-[30px]" : "mb-[20px]"}`}
        >
          <PiGraduationCapThin className="text-[25px] text-[#9DA4AE]" />
          <Link
            to={"/"}
            className="inter font-semibold text-[18px] text-[#9DA4AE] w-[150px]"
          >
            Academy
          </Link>
          {first ? (
            <FaAngleRight
              className="text-[20px] text-[#4D5761] cursor-pointer"
              onClick={() => setFirst(!first)}
            />
          ) : (
            <FaAngleDown
              className="text-[20px] text-[#4D5761] cursor-pointer"
              onClick={() => setFirst(!first)}
            />
          )}
        </div>
        <Link
          className={`inter font-medium text-[#9DA4AE] ml-[40px] mb-[25px] ${first ? "hidden" : "block"}`}
        >
          Dashboard
        </Link>
        <Link
          className={`inter font-medium text-[#9DA4AE] ml-[40px] mb-[25px] ${first ? "hidden" : "block"}`}
        >
          Course
        </Link>
        <div
          className={`flex items-center justify-between ${seventh ? "mb-[30px]" : "mb-[20px]"}`}
        >
          <HiOutlineClipboardList className="text-[25px] text-[#9DA4AE]" />
          <Link
            to={"/"}
            className="inter font-semibold text-[18px] text-[#9DA4AE] w-[150px]"
          >
            Job Listings
          </Link>
          {seventh ? (
            <FaAngleRight
              className="text-[20px] text-[#4D5761] cursor-pointer"
              onClick={() => setSeventh(!seventh)}
            />
          ) : (
            <FaAngleDown
              className="text-[20px] text-[#4D5761] cursor-pointer"
              onClick={() => setSeventh(!seventh)}
            />
          )}
        </div>
        <Link
          className={`inter font-medium text-[#9DA4AE] ml-[40px] mb-[25px] ${seventh ? "hidden" : "block"}`}
        >
          Browse
        </Link>
        <Link
          className={`inter font-medium text-[#9DA4AE] ml-[40px] mb-[25px] ${seventh ? "hidden" : "block"}`}
        >
          Details
        </Link>
        <Link
          className={`inter font-medium text-[#9DA4AE] ml-[40px] mb-[25px] ${seventh ? "hidden" : "block"}`}
        >
          Create
        </Link>
        <div
          className={`flex items-center justify-between ${socialMedia ? "mb-[30px]" : "mb-[20px]"}`}
        >
          <IoShareSocialOutline className="text-[25px] text-[#9DA4AE]" />
          <Link
            to={"/"}
            className="inter font-semibold text-[18px] text-[#9DA4AE] w-[150px]"
          >
            Social Media
          </Link>
          {socialMedia ? (
            <FaAngleRight
              className="text-[20px] text-[#4D5761] cursor-pointer"
              onClick={() => setSocialMedia(!socialMedia)}
            />
          ) : (
            <FaAngleDown
              className="text-[20px] text-[#4D5761] cursor-pointer"
              onClick={() => setSocialMedia(!socialMedia)}
            />
          )}
        </div>
        <Link
          className={`inter font-medium text-[#9DA4AE] ml-[40px] mb-[25px] ${socialMedia ? "hidden" : "block"}`}
          to={"/socialMediaOne"}
        >
          SocialMediaOne
        </Link>
        <Link
          className={`inter font-medium text-[#9DA4AE] ml-[40px] mb-[25px] ${socialMedia ? "hidden" : "block"}`}
          to={"/socialMediaTwo"}
        >
          SocialMediaTwo
        </Link>

        <div
          className={`flex items-center justify-between ${sixth ? "mb-[30px]" : "mb-[20px]"}`}
        >
          <BsReverseLayoutTextSidebarReverse className="text-[25px] text-[#9DA4AE]" />
          <Link
            to={"/"}
            className="inter font-semibold text-[18px] text-[#9DA4AE] w-[150px]"
          >
            Blog
          </Link>
          {sixth ? (
            <FaAngleRight
              className="text-[20px] text-[#4D5761] cursor-pointer"
              onClick={() => setSixth(!sixth)}
            />
          ) : (
            <FaAngleDown
              className="text-[20px] text-[#4D5761] cursor-pointer"
              onClick={() => setSixth(!sixth)}
            />
          )}
        </div>
        <Link
          className={`inter font-medium text-[#9DA4AE] ml-[40px] mb-[25px] ${sixth ? "hidden" : "block"}`}
          to={"/blogOne"}
        >
          Post List
        </Link>
        <Link
          className={`inter font-medium text-[#9DA4AE] ml-[40px] mb-[25px] ${sixth ? "hidden" : "block"}`}
          to={"/blogTwo"}
        >
          Post Details
        </Link>
        <Link
          className={`inter font-medium text-[#9DA4AE] ml-[40px] mb-[25px] ${sixth ? "hidden" : "block"}`}
          to={"/blogThree"}
        >
          Post Create
        </Link>
        <div className="flex items-center gap-[16px] mb-[20px]">
          <LuCircleFadingArrowUp className="text-[25px] text-[#9DA4AE]" />
          <Link
            to={"/fileManager"}
            className="inter font-semibold text-[18px] text-[#9DA4AE]"
          >
            File Manager
          </Link>
        </div>
        <div className="flex items-center gap-[16px] mb-[20px]">
          <BiSelectMultiple className="text-[25px] text-[#9DA4AE]" />
          <Link
            to={"/"}
            className="inter font-semibold text-[18px] text-[#9DA4AE]"
          >
            Kanban
          </Link>
        </div>
        <div className="flex items-center gap-[16px] mb-[20px]">
          <PiChats className="text-[25px] text-[#9DA4AE]" />
          <Link
            to={"/"}
            className="inter font-semibold text-[18px] text-[#9DA4AE]"
          >
            Chat
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EditedSidebar;
