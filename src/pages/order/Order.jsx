import "./Order.css";
import { CiCalendar, CiSearch } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineModeEdit, MdOutlineShoppingCart } from "react-icons/md";
import { BiSolidChevronDown } from "react-icons/bi";
import { HiChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

function Order() {
  return (
    <div>
      <div className="main flex items-start flex-col gap-[32px] max-w-[1400px] pl-[100px] py-[63px] pr-[100px] ">
        <div className="flex items-center gap-[8px]  ">
          <FaArrowLeft className="text-black" />
          <h1 className="font-medium text-[14px] leading-[22px] text-[#111927]">
            Orders
          </h1>
        </div>

        <div className="flex items-center w-full justify-between  py-[30px] ">
          <div className="flex items-start flex-col gap-[10px] ">
            <h1 className="font-bold text-[33px] leading-[40px] text-[#111927]">
              DEV-103
            </h1>
            <div className="flex items-center gap-[8px] ">
              <h2 className="font-normal text-[14px] leading-[22px] text-[#6C737F]">
                Placed on
              </h2>
              <CiCalendar className="w-[24px] h-[24px] text-[#6C737F]" />

              <h3 className="font-normal text-[14px] leading-[22px] text-[#111927]">
                31/01/2024 11:19
              </h3>
            </div>
          </div>

          <div className="flex items-center justify-center gap-[16px]  ">
            <div className="flex items-center gap-[8px] ">
              <h1 className="font-semibold text-[14px] leading-[25px] text-[#111927]">
                Edit
              </h1>
              <MdOutlineModeEdit className="w-[20px] h-[20px] text-[#111927]" />
            </div>
            <button className="w-[108px] h-[40px] rounded-[12px] bg-[#6366F1] box-shadow-[0px_1px_5px_0px_#00000014] font-semibold text-[14px] leading-[25px] text-[#FFFFFF]">
              Action
            </button>
          </div>
        </div>

        <div
          style={{
            boxShadow:
              "0px 0px 0px 0.5px rgba(0, 0, 0, 0.03), 0px 5px 22px 0px rgba(0, 0, 0, 0.04)",
          }}
          className="w-full h-[610px] p-[25px] rounded-[20px] bg-[#FFFFFF]"
        >
          <div className="border-b p-[17px]  border-[#F2F4F7]">
            <h1 className="font-bold text-[#111927]">Basic info</h1>
          </div>
          <div className="flex items-start  gap-[114.04px] border-[#F2F4F7] border-b p-[17px]">
            <h1 className="font-medium text-[14px] leading-[22px] text-[#111927]">
              Customer
            </h1>
            <span className="font-normal text-[14px] leading-[22px] text-[#6C737F]">
              <h2 className="font-medium text-[14px] leading-[22px] text-[#111927]">
                Miron Vitold
              </h2>
              Street John Wick, no. 7 <br /> San Diego <br /> USA
            </span>
          </div>
          <div className="flex items-center gap-[160px] border-[#F2F4F7] border-b p-[17px]">
            <h1 className="font-medium text-[13px] leading-[22px] text-[#111927]">
              ID
            </h1>
            <h2 className="font-normal text-[14px] leading-[22px] text-[#6C737F]">
              5ecb8a6879877087d4aa2690
            </h2>
          </div>
          <div className="flex items-center gap-[132.03px] border-[#F2F4F7] border-b p-[17px]">
            <h1 className="font-medium text-[13px] leading-[22px] text-[#111927]">
              Invoice
            </h1>
            <h2 className="font-normal text-[14px] leading-[22px] text-[#6C737F]">
              DEV-103
            </h2>
          </div>
          <div className="flex items-center gap-[148px] border-[#F2F4F7] border-b p-[17px]">
            <h1 className="font-medium text-[13px] leading-[22px] text-[#111927]">
              Date
            </h1>
            <h2 className="font-normal text-[14px] leading-[22px] text-[#6C737F]">
              31/01/2024 11:19
            </h2>
          </div>
          <div className="flex items-center gap-[80px] border-[#F2F4F7] border-b p-[17px]">
            <h1 className="font-medium text-[13px] leading-[22px] text-[#111927]">
              Promotion Code
            </h1>
            <h2 className="font-normal text-[14px] leading-[22px] text-[#6C737F]">
              PROMO1
            </h2>
          </div>
          <div className="flex items-center gap-[98px] border-[#F2F4F7] border-b p-[17px]">
            <h1 className="font-medium text-[13px] leading-[22px] text-[#111927]">
              Total Amount
            </h1>
            <h2 className="font-normal text-[14px] leading-[22px] text-[#6C737F]">
              $500
            </h2>
          </div>
          <div className="flex items-start gap-[90px] border-[#F2F4F7] p-[17px]">
            <h1 className="font-medium text-[13px] leading-[22px] text-[#111927]">
              Status
            </h1>
            <div className="flex items-center justify-between gap-[8px] py-[18px] ">
              <div className="flex items-start flex-col w-[763px] h-[55px] py-[6px] px-[12px] rounded-[8px] border-1 border-[#E5E7EB]">
                <h1 className="font-medium text-[12px] leading-[20px] text-[#6C737F]">
                  Status
                </h1>
                <h2 className="font-medium text-[14px] leading-[24px] text-[#111927]">
                  Canceled
                </h2>
              </div>
              <button className="w-[73px] h-[40px] rounded-[12px] bg-[#6366F1] font-semibold text-[14px] leading-[25px] text-[#FFFFFF] ">
                Save
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            boxShadow:
              "0px 0px 0px 0.5px rgba(0, 0, 0, 0.03), 0px 5px 22px 0px rgba(0, 0, 0, 0.04)",
          }}
          className="w-full h-[300px] rounded-[20px] bg-[#FFFFFF]"
        >
          <div className="p-[29px]  border-[#F2F4F7]">
            <h1 className="font-bold text-[17px] text-[#111927] leading-[20px] ">
              Order items
            </h1>
          </div>
          <div>
            <div className="flex items-center justify-between py-[14px] bg-[#F8F9FA] ">
              <h1 className="font-semibold text-[12px] px-[20px] leading-[12px] tracking-[0.5px] text-[#2F3746] ">
                DESCRIPTION
              </h1>
              <div className="flex items-center gap-[229px] pr-[140px] ">
                <h2 className="font-semibold text-[12px] leading-[12px] tracking-[0.5px] text-[#2F3746]">
                  BILLING CYCLE
                </h2>
                <span className="font-semibold text-[12px] leading-[12px] tracking-[0.5px] text-[#2F3746]">
                  AMOUNT
                </span>
              </div>
            </div>
            <div className="flex items-center border-[#F2F4F7] border-b justify-between py-[20px] ">
              <h1 className="font-medium  text-[14px] px-[20px] leading-[22px] text-[#111927] ">
                Project Points x 25
              </h1>
              <div className="flex items-center gap-[229px] pr-[140px] ">
                <h2 className="font-semibold text-[12px] leading-[12px] tracking-[0.5px] text-[#2F3746]">
                  BILLING CYCLE
                </h2>
                <span className="font-semibold text-[12px] leading-[12px] tracking-[0.5px] text-[#2F3746]">
                  AMOUNT
                </span>
              </div>
            </div>
            <div className="flex items-center border-[#F2F4F7] border-b justify-between py-[20px] ">
              <h1 className="font-semibold text-[12px] px-[20px] leading-[12px] tracking-[0.5px] text-[#2F3746] ">
                Freelancer Subscription x 1
              </h1>
              <div className="flex items-center gap-[229px] pr-[140px] ">
                <h2 className="font-semibold text-[12px] leading-[12px] tracking-[0.5px] text-[#2F3746]">
                  BILLING CYCLE
                </h2>
                <span className="font-semibold text-[12px] leading-[12px] tracking-[0.5px] text-[#2F3746]">
                  AMOUNT
                </span>
              </div>
            </div>
            <div className="flex items-center justify-end py-[6px] gap-[23px] px-[14px] ">
              <h1 className="font-normal text-[14px] leading-[22px] text-[#111927]">
                Rows per page:
              </h1>
              <div className="flex items-center gap-[7px] ">
                <h2 className="font-normal text-[14px] leading-[20px] text-[#111927]">
                  5
                </h2>
                <BiSolidChevronDown className=" text-[#6C737F] " />
              </div>
              <span className="font-normal text-[14px] leading-[22px] text-[#111927]">
                1–2 of 2
              </span>
              <div className="flex items-center gap-[16px] text-[#11192761] ">
                <HiChevronLeft />
                <HiOutlineChevronRight />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            boxShadow:
              "0px 0px 0px 0.5px rgba(0, 0, 0, 0.03), 0px 5px 22px 0px rgba(0, 0, 0, 0.04)",
          }}
          className="w-full h-[290px] rounded-[20px] bg-[#FFFFFF]"
        >
          <div className="p-[29px]  border-[#F2F4F7]">
            <h1 className="font-bold text-[17px] leading-[20px] text-[#111927] ">
              Logs
            </h1>
          </div>
          <div className="flex items-start flex-col gap-[45px] px-[24px] ">
            <div className="flex items-center gap-[16px]">
              <div className="w-[40px] h-[40px] rounded-[20px] bg-[#E5E7EB] justify-center flex items-center">
                <MdOutlineShoppingCart className="w-[24px] h-[23px] text-[#000000] " />
              </div>
              <div>
                <h1 className="font-normal text-[14px] leading-[22px] text-[#111927] ">
                  Stripe charge complete (Charge ID: 5ecb8a6879877087d4aa2690)
                </h1>
                <h2 className="font-medium text-[12px] leading-[20px] text-[#6C737F]">
                  Jan 31, 9:19 PM
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-[16px]">
              <div className="w-[40px] h-[40px] rounded-[20px] bg-[#E5E7EB] justify-center flex items-center">
                <MdOutlineShoppingCart className="w-[24px] h-[23px] text-[#000000] " />
              </div>
              <div>
                <h1 className="font-normal text-[14px] leading-[22px] text-[#111927] ">
                  Order status changed from Pending payment to Completed.
                </h1>
                <h2 className="font-medium text-[12px] leading-[20px] text-[#6C737F]">
                  Jan 31, 6:19 PM
                </h2>
              </div>
            </div>
          </div>

          <div className="flex items-center flex-col py-[29px] ">
            <h1 className="font-semibold text-[14px] leading-[25px] text-[#111927]">
              Lead more
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
