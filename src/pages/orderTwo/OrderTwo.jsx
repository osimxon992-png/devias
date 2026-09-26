import { BiCheckbox } from "react-icons/bi";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import mui from "../../assets/mui.png";
import mui1 from "../../assets/mui1.png";
import { FiArrowRight, FiFilter } from "react-icons/fi";

const OrderTwo = () => {
  return (
    <div className="p-10 flex">
      <div
        style={{
          boxShadow:
            "0px 0px 0px 0.5px rgba(0, 0, 0, 0.03), 0px 5px 22px 0px rgba(0, 0, 0, 0.04)",
        }}
        className="flex items-start flex-col p-[24px]  py-[24px] w-[428px] h-[881px] rounded-[20px] bg-[#FFFFFF]"
      >
        <h1 className="font-bold text-[23px] w-[380px] h-[75px] leading-[28px] text-[#111927]">
          Filters
        </h1>
        <div className="flex items-start flex-col py-[24px]">
          <input
            className=" pl-[12px] font-medium text-[14px] leading-[100%] text-[#6C737F] w-[332px] h-[55px] rounded-[8px] border-1 border-[#E5E7EB]"
            type="text"
            placeholder="Invoice number"
          />
          <div className="flex items-start flex-col py-[25px] gap-[18px]  ">
            <span className="font-medium text-[14px] leading-[20px] text-[#6C737F]">
              Issue date
            </span>
            <input
              className="w-[332px] h-[55px] pl-[12px] rounded-[8px] border-1 border-[#E5E7EB] font-medium
            text-[14px] leading-[20px] text-[#6C737F]"
              type="text"
              placeholder="From"
            />
            <input
              className="w-[332px] h-[55px] pl-[12px] rounded-[8px] border-1 border-[#E5E7EB] font-medium
            text-[14px] leading-[20px] text-[#6C737F]"
              type="text"
              placeholder="To"
            />
          </div>
          <div className="flex items-start flex-col gap-[18px] ">
            <h2 className="font-medium text-[14px] leading-[20px] text-[#6C737F]">
              From customer
            </h2>
            <div
              className="w-[332px]  overflow-auto [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-transparent
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  [&::-webkit-scrollbar-thumb]:rounded-full
  hover:[&::-webkit-scrollbar-thumb]:bg-gray-400 h-[200px] gap-[23px] rounded-[8px] border-1 border-[#F2F4F7] bg-[#F8F9FA]"
            >
              <div className="flex items-center gap-[9px] p-[13px]">
                <MdCheckBoxOutlineBlank className="text-[#6C737F]" />
                <h1 className="font-normal text-[16px] leading-[24px] text-[#111927]">
                  Blind Spots Inc.
                </h1>
              </div>
              <div className="flex items-center gap-[9px] p-[13px]">
                <MdCheckBoxOutlineBlank className="text-[#6C737F]" />
                <h1 className="font-normal text-[16px] leading-[24px] text-[#111927]">
                  Dispatcher Inc.
                </h1>
              </div>
              <div className="flex items-center gap-[9px] p-[13px]">
                <MdCheckBoxOutlineBlank className="text-[#6C737F]" />
                <h1 className="font-normal text-[16px] leading-[24px] text-[#111927]">
                  ACME SRL
                </h1>
              </div>
              <div className="flex items-center gap-[9px] p-[13px]">
                <MdCheckBoxOutlineBlank className="text-[#6C737F]" />
                <h1 className="font-normal text-[16px] leading-[24px] text-[#111927]">
                  Novelty I.S
                </h1>
              </div>
              <div className="flex items-center gap-[9px] p-[13px] bg-[#F8F9FA] ">
                <MdCheckBoxOutlineBlank className="text-[#6C737F]" />
                <h1 className="font-normal text-[16px] leading-[24px] text-[#111927]">
                  Beauty Clinic SRL
                </h1>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-[24px] py-[24px] flex-col ">
            <div className="flex items-center">
              <img src={mui} alt="" />
              <h2 className="font-normal text-[16px] leading-[24px] text-[#111927]">
                Paid only
              </h2>
            </div>
            <div className="flex items-center">
              <img src={mui1} alt="" />
              <h2 className="font-normal text-[16px] leading-[24px] text-[#111927]">
                Group by status
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start flex-col px-[34px] py-[64px]">
        <div className="flex items-center gap-[370px]">
          <h1 className="font-bold text-[33px] leading-[40px] text-[#111927] ">
            Invoices
          </h1>
          <div className="flex items-center ">
            <div className="flex items-center gap-[8px] w-[99px] h-[42px] rounded-[12px] ">
              <FiFilter className="text-[#111927]" />
              <span className="font-semibold text-[14px] leading-[25px] text-[#111927]">
                Filters
              </span>
            </div>
            <div>
              <button className="w-[94px] h-[40px] rounded-[12px] bg-[#6366F1] font-semibold text-[14px] leading-[25px] text-[#FFFFFF]">
                New
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[24px] py-[34px]">
          <div
            style={{
              boxShadow:
                "0px 0px 0px 0.5px rgba(0, 0, 0, 0.03), 0px 5px 22px 0px rgba(0, 0, 0, 0.04)",
            }}
            className="bg-[#FFFFFF] w-[216px] h-[127px] flex items-center py-[34px] flex-col gap-[3px] rounded-[20px] "
          >
            <h3 className="font-normal text-[14px] leading-[22px] text-[#6C737F]">
              Total
            </h3>
            <h1 className="font-bold text-[17px] leading-[20px] text-[#111927]">
              $5,300.00
            </h1>
            <span className="font-normal text-[14px] leading-[22px] text-[#6C737F]">
              from 12 invoices
            </span>
          </div>
          <div
            style={{
              boxShadow:
                "0px 0px 0px 0.5px rgba(0, 0, 0, 0.03), 0px 5px 22px 0px rgba(0, 0, 0, 0.04)",
            }}
            className="bg-[#FFFFFF] w-[216px] h-[127px] flex items-center py-[34px] flex-col gap-[3px] rounded-[20px] "
          >
            <h3 className="font-normal text-[14px] leading-[22px] text-[#6C737F]">
              Paid
            </h3>
            <h1 className="font-bold text-[17px] leading-[20px] text-[#111927]">
              $1,439.60
            </h1>
            <span className="font-normal text-[14px] leading-[22px] text-[#6C737F]">
              from 3 invoices
            </span>
          </div>
          <div
            style={{
              boxShadow:
                "0px 0px 0px 0.5px rgba(0, 0, 0, 0.03), 0px 5px 22px 0px rgba(0, 0, 0, 0.04)",
            }}
            className="bg-[#FFFFFF] w-[216px] h-[127px] flex items-center py-[34px] flex-col gap-[3px] rounded-[20px] "
          >
            <h3 className="font-normal text-[14px] leading-[22px] text-[#6C737F]">
              Pending
            </h3>
            <h1 className="font-bold text-[17px] leading-[20px] text-[#111927]">
              $276.87
            </h1>
            <span className="font-normal text-[14px] leading-[22px] text-[#6C737F]">
              from 2 invoices
            </span>
          </div>
        </div>
        <h3 className="font-bold text-[17px] leading-[20px] text-[#6C737F] px-[10px] py-[10px]">
          Canceled (0)
        </h3>
        <div className="flex items-start flex-col py-[46px] px-[10px] ">
          <h1 className="font-bold text-[17px] leading-[20px] text-[#6C737F] ">
            Paid (3)
          </h1>
          <div
            style={{
              boxShadow:
                "0px 0px 0px 0.5px rgba(0, 0, 0, 0.03), 0px 5px 22px 0px rgba(0, 0, 0, 0.04)",
            }}
            className="bg-[FFFFFF] w-[690px] gap-[17px] h-auto rounded-[20px] justify-between border-b px-[17px]  flex flex-col mt-[17px] "
          >
            <div className="flex items-center justify-between  py-[20px]">
              <div className="flex items-center gap-3">
                <div className="w-[42px] h-[42px] rounded-[21px] bg-[#E5E7EB] font-semibold text-[14px] text-[#000000] flex justify-center items-center">
                  AS
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-[14px] leading-[22px] text-[#111927]">
                    INV-0019
                  </span>
                  <span className="font-normal text-[14px] leading-[22px] text-[#6C737F]">
                    Blind Spots Inc.
                  </span>
                </div>
              </div>

              <div className="font-medium text-[14px] leading-[22px] text-[#111927]">
                $688.90
              </div>

              <div className="flex flex-col">
                <span className="font-medium text-[14px] leading-[22px] text-[#111927]">
                  Issued
                </span>
                <span className="font-normal text-[14px] leading-[22px] text-[#6C737F]">
                  01/02/2024
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-medium text-[14px] leading-[22px] text-[#111927]">
                  Due
                </span>
                <span className="font-normal text-[14px] leading-[22px] text-[#6C737F]">
                  06/02/2024
                </span>
              </div>

              <div className="px-2.5 py-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 rounded-full uppercase">
                PAID
              </div>

              <FiArrowRight className="text-gray-400 w-5 h-5 cursor-pointer" />
            </div>

            <div className="flex items-center justify-between  py-[20px]">
              <div className="flex items-center gap-3">
                <div className="w-[42px] h-[42px] rounded-[21px] bg-[#E5E7EB] font-semibold text-[14px] text-[#000000] flex justify-center items-center">
                  BS
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-[14px] leading-[22px] text-[#111927]">
                    INV-0018
                  </span>
                  <span className="font-normal text-[14px] leading-[22px] text-[#6C737F]">
                    Blind Spots Inc.
                  </span>
                </div>
              </div>

              <div className="font-medium text-[14px] leading-[22px] text-[#111927]">
                $688.90
              </div>

              <div className="flex flex-col">
                <span className="font-medium text-[14px] leading-[22px] text-[#111927]">
                  Issued
                </span>
                <span className="font-normal text-[14px] leading-[22px] text-[#6C737F]">
                  01/02/2024
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-medium text-[14px] leading-[22px] text-[#111927]">
                  Due
                </span>
                <span className="font-normal text-[14px] leading-[22px] text-[#6C737F]">
                  07/02/2024
                </span>
              </div>

              <div className="px-2.5 py-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 rounded-full uppercase">
                PAID
              </div>

              <FiArrowRight className="text-gray-400 w-5 h-5 cursor-pointer" />
            </div>
            <div className="flex items-center justify-between  py-[20px]">
              <div className="flex items-center gap-3">
                <div className="w-[42px] h-[42px] rounded-[21px] bg-[#E5E7EB] font-semibold text-[14px] text-[#000000] flex justify-center items-center">
                  BC
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-[14px] leading-[22px] text-[#111927]">
                    INV-0018
                  </span>
                  <span className="font-normal text-[14px] leading-[22px] text-[#6C737F]">
                    Blind Spots Inc.
                  </span>
                </div>
              </div>

              <div className="font-medium text-[14px] leading-[22px] text-[#111927]">
                $688.90
              </div>

              <div className="flex flex-col">
                <span className="font-medium text-[14px] leading-[22px] text-[#111927]">
                  Issued
                </span>
                <span className="font-normal text-[14px] leading-[22px] text-[#6C737F]">
                  01/02/2024
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-medium text-[14px] leading-[22px] text-[#111927]">
                  Due
                </span>
                <span className="font-normal text-[14px] leading-[22px] text-[#6C737F]">
                  07/02/2024
                </span>
              </div>

              <div className="px-2.5 py-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 rounded-full uppercase">
                PAID
              </div>

              <FiArrowRight className="text-gray-400 w-5 h-5 cursor-pointer" />
            </div>
          </div>
          <div className="flex items-start flex-col px-[10px] py-[46px]">
            <h1 className="font-bold text-[17px] leading-[20px] text-[#6C737F]">
              Pending (2)
            </h1>
            <div
              style={{
                boxShadow:
                  "0px 0px 0px 0.5px rgba(0, 0, 0, 0.03), 0px 5px 22px 0px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-[#FFFFFF] w-[690px] gap-[17px] h-auto rounded-[20px] border-b px-[17px] flex flex-col mt-[15px] "
            >
              <div className="flex items-center justify-between  py-[20px]">
                <div className="flex items-center gap-3">
                  <div className="w-[42px] h-[42px] rounded-[21px] bg-[#E5E7EB] font-semibold text-[14px] text-[#000000] flex justify-center items-center">
                    BC
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-[14px] leading-[22px] text-[#111927]">
                      INV-0018
                    </span>
                    <span className="font-normal text-[14px] leading-[22px] text-[#6C737F]">
                      Blind Spots Inc.
                    </span>
                  </div>
                </div>

                <div className="font-medium text-[14px] leading-[22px] text-[#111927]">
                  $688.90
                </div>

                <div className="flex flex-col">
                  <span className="font-medium text-[14px] leading-[22px] text-[#111927]">
                    Issued
                  </span>
                  <span className="font-normal text-[14px] leading-[22px] text-[#6C737F]">
                    01/02/2024
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="font-medium text-[14px] leading-[22px] text-[#111927]">
                    Due
                  </span>
                  <span className="font-normal text-[14px] leading-[22px] text-[#6C737F]">
                    07/02/2024
                  </span>
                </div>

                <div className="px-2.5 py-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 rounded-full uppercase">
                  PAID
                </div>

                <FiArrowRight className="text-gray-400 w-5 h-5 cursor-pointer" />
              </div>
              <div className="flex items-center justify-between  py-[20px]">
                <div className="flex items-center gap-3">
                  <div className="w-[42px] h-[42px] rounded-[21px] bg-[#E5E7EB] font-semibold text-[14px] text-[#000000] flex justify-center items-center">
                    BC
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-[14px] leading-[22px] text-[#111927]">
                      INV-0018
                    </span>
                    <span className="font-normal text-[14px] leading-[22px] text-[#6C737F]">
                      Blind Spots Inc.
                    </span>
                  </div>
                </div>

                <div className="font-medium text-[14px] leading-[22px] text-[#111927]">
                  $688.90
                </div>

                <div className="flex flex-col">
                  <span className="font-medium text-[14px] leading-[22px] text-[#111927]">
                    Issued
                  </span>
                  <span className="font-normal text-[14px] leading-[22px] text-[#6C737F]">
                    01/02/2024
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="font-medium text-[14px] leading-[22px] text-[#111927]">
                    Due
                  </span>
                  <span className="font-normal text-[14px] leading-[22px] text-[#6C737F]">
                    07/02/2024
                  </span>
                </div>

                <div className="px-2.5 py-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 rounded-full uppercase">
                  PAID
                </div>

                <FiArrowRight className="text-gray-400 w-5 h-5 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTwo;
