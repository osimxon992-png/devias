import { FaRegClock } from "react-icons/fa";
import { FiAlertTriangle } from "react-icons/fi";
import { IoAlertCircleOutline } from "react-icons/io5";
import SVG1 from "../../assets/SVG1.png";
import CircleChart from "../../components/CircleChart/CircleChart";
import { Gauge } from "@mui/x-charts";

function InvoicesTwo() {
  return (
    <div className="px-[24px] py-[64px] ">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-[33px] leading-[40px] text-[#111927]">
          Logistics
        </h1>
        <button className="w-[145px] h-[40px] rounded-[12px] bg-[#6366F1] font-semibold text-[14px] leading-[25px] text-[#FFFFFF]">
          Add Vehicle
        </button>
      </div>
      <div className="flex items-center gap-[16px]">
        <div className="flex items-center gap-[16px] py-[36px]">
          <div
            style={{
              boxShadow: `
      0px 0px 0px 0.5px #00000008,
      0px 5px 22px 0px #0000000A
    `,
            }}
            className="w-[285px] py-[29px] px-[35px] h-[117px] rounded-[20px] bg-[#FFFFFF]"
          >
            <div className="flex items-center gap-[26px]">
              <div className="w-[18px] h-[18px] rounded-[9px] bg-[#F04438]"></div>
              <span className="font-bold text-[23px] leading-[28px] text-[#111927]">
                38
              </span>
            </div>
            <p className="font-normal py-[15px] text-[14px] leading-[22px] text-[#6C737F] ">
              On route vehicles
            </p>
          </div>
        </div>
        <div
          style={{
            boxShadow: `
      0px 0px 0px 0.5px #00000008,
      0px 5px 22px 0px #0000000A
    `,
          }}
          className="w-[285px] py-[29px] px-[35px] h-[118px] rounded-[20px] bg-[#FFFFFF]"
        >
          <div className="flex items-center gap-[26px]">
            <div className="w-[40px] flex items-center justify-center h-[40px] rounded-[8px] bg-[#F044381F]">
              <FiAlertTriangle className="text-[#F04438] w-[24px] h-[24px] " />
            </div>

            <span className="font-bold text-[23px] leading-[28px] text-[#111927]">
              2
            </span>
          </div>
          <p className="font-normal py-[6px] text-[14px] leading-[22px] text-[#6C737F] ">
            Vehicles with errors
          </p>
        </div>
        <div
          style={{
            boxShadow: `
      0px 0px 0px 0.5px #00000008,
      0px 5px 22px 0px #0000000A
    `,
          }}
          className="w-[285px] py-[29px] px-[35px] h-[118px] rounded-[20px] bg-[#FFFFFF]"
        >
          <div className="flex items-center gap-[26px]">
            <div className="w-[40px] flex items-center justify-center h-[40px] rounded-[8px] bg-[#F044381F]">
              <IoAlertCircleOutline className="text-[#F79009] w-[24px] h-[24px] " />
            </div>

            <span className="font-bold text-[23px] leading-[28px] text-[#111927]">
              1
            </span>
          </div>
          <p className="font-normal py-[6px] text-[14px] leading-[22px] text-[#6C737F] ">
            Vehicles deviated from route
          </p>
        </div>
        <div
          style={{
            boxShadow: `
      0px 0px 0px 0.5px #00000008,
      0px 5px 22px 0px #0000000A
    `,
          }}
          className="w-[285px] py-[29px] px-[35px] h-[118px] rounded-[20px] bg-[#FFFFFF]"
        >
          <div className="flex items-center gap-[26px]">
            <div className="w-[40px] flex items-center justify-center h-[40px] rounded-[8px] bg-[#F044381F]">
              <FaRegClock className="text-[#6366F1] w-[24px] h-[24px] " />
            </div>

            <span className="font-bold text-[23px] leading-[28px] text-[#111927]">
              2
            </span>
          </div>
          <p className="font-normal py-[6px] text-[14px] leading-[22px] text-[#6C737F] ">
            Late vehicles
          </p>
        </div>
      </div>
      <div className="flex items-center gap-[15px] ">
        <div
          style={{
            boxShadow: `
      0px 0px 0px 0.5px #00000008,
      0px 5px 22px 0px #0000000A
    `,
          }}
          className="w-[660px] h-[394px] rounded-[20px] py-[32px] px-[24px] bg-[#FFFFFF]"
        >
          <h1 className="font-bold text-[17px] leading-[20px] text-[#111927]">
            Vehicles Overview
          </h1>
          <div className="flex items-center py-[40px]">
            {/* <img src={SVG1} alt="" /> */}
            <CircleChart />
            <div className="flex items-start flex-col px-[24px]">
              <div className="flex items-center flex-col py-[34px] ">
                <h2 className="font-normal text-[14px] leading-[22px] text-[#6C737F]">
                  Total
                </h2>
                <h1 className="font-bold text-[23px] leading-[28px] text-[#111927] ">
                  100
                </h1>
              </div>
              <div className="flex items-center flex-col gap-[22px]">
                <div className="flex items-center gap-[21px] ">
                  <div className="flex items-center gap-[193px]">
                    <div className="flex items-center gap-[8px] ">
                      <div className="w-[16px] h-[16px] rounded-[4px] bg-[#6366F1] "></div>
                      <p className="font-normal text-[14px] leading-[22px] text-[#6C737F]">
                        Available
                      </p>
                    </div>
                    <span className="font-medium leading-[22px] text-[14px] text-[#111927]">
                      38
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-[21px] ">
                  <div className="flex items-center gap-[193px]">
                    <div className="flex items-center gap-[8px] ">
                      <div className="w-[16px] h-[16px] rounded-[4px] bg-[#F79009] "></div>
                      <p className="font-normal text-[14px] leading-[22px] text-[#6C737F]">
                        Available
                      </p>
                    </div>
                    <span className="font-medium leading-[22px] text-[14px] text-[#111927]">
                      12
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-[21px] ">
                  <div className="flex items-center gap-[193px]">
                    <div className="flex items-center gap-[8px] ">
                      <div className="w-[16px] h-[16px] rounded-[4px] bg-[#06AED4] "></div>
                      <p className="font-normal text-[14px] leading-[22px] text-[#6C737F]">
                        Available
                      </p>
                    </div>
                    <span className="font-medium leading-[22px] text-[14px] text-[#111927]">
                      12
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            boxShadow: `
      0px 0px 0px 0.5px #00000008,
      0px 5px 22px 0px #0000000A
    `,
          }}
          className="w-[530px] h-[356px] mb-[33px] rounded-[20px]  py-[32px] px-[24px] bg-[#FFFFFF] "
        >
          <h1 className="font-bold text-[17px] leading-[20px] text-[#111927]">
            Vehicles Condition
          </h1>
          <div className="flex items-center gap-[24px] mt-[20px]">
            <div className="w-[190px] h-[272px] flex items-center justify-center rounded-[24px] bg-[#6366F10A]">
              <h1 className="font-bold text-[17px] leading-[20px] text-[#6366F1] ">
                Very good
              </h1>
              {/* <Child /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoicesTwo;
