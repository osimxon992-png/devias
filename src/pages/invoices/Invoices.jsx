import { CiCalendar } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineModeEdit } from "react-icons/md";
import SVG from "../../assets/SVG.png";

function Invoices() {
  return (
    <div>
      <div className="flex items-start flex-col px-[123px]">
        <div className="flex items-center gap-[8px] py-[44px]  ">
          <FaArrowLeft className="text-black" />
          <h1 className="font-medium text-[14px] leading-[22px] text-[#111927]">
            Invoices
          </h1>
        </div>

        <div className="flex items-center w-full justify-between py-[10px] ">
          <div className="flex items-center gap-[16px]">
            <div className="w-[42px] h-[42px] rounded-[20px] bg-[#E5E7EB] font-semibold text-[14px] leading-[14px] text-[#000000] flex items-center justify-center">
              AS
            </div>
            <div>
              <h1 className="font-bold text-[33px] leading-[40px] text-[#111927]">
                INV-0019
              </h1>
              <span className="font-normal text-[14px] leading-[22px] text-[#6C737F]">
                ACME SRL
              </span>
            </div>
          </div>

          <div className="flex items-center gap-[16px] ">
            <h1 className="font-semibold text-[14px] leading-[25px] text-[#111927] ">
              Preview
            </h1>
            <button className="w-[107px] h-[40px] rounded-[12px] bg-[#6366F1] font-semibold text-[14px] leading-[24px] text-[#FFFFFF]">
              Download
            </button>
          </div>
        </div>
        <div
          style={{
            boxShadow:
              "0px 0px 0px 0.5px rgba(0, 0, 0, 0.03), 0px 5px 22px 0px rgba(0, 0, 0, 0.04)",
          }}
          className="w-[1020px] h-[820px] rounded-[20px] mt-[64px] px-[48px] py-[48px] bg-[#FFFFFF]"
        >
          <div className="flex items-center justify-between">
            <div>
              <img src={SVG} alt="" />
              <h1 className="font-medium text-[14px] leading-[22px] text-[#111927]">
                www.devias.io
              </h1>
            </div>
            <div>
              <h1 className="font-bold text-[33px] leading-[40px] text-[#10B981]">
                PAID
              </h1>
              <p className="font-medium text-[14px] leading-[22px] text-[#111927]">
                INV-0019
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between py-[48px]">
            <h1 className="font-normal text-[14px] leading-[22px] text-[#111927]">
              Street King William, 123 <br /> Level 2, C, 442456 <br /> San
              Francisco, CA, USA
            </h1>
            <h2 className="font-normal text-[14px] leading-[22px] text-[#111927]">
              Company No. 4675933 <br /> EU VAT No. 949 67545 45
            </h2>
            <h3 className="font-normal text-[14px] leading-[22px] text-[#111927]">
              accounts@devias.io <br /> (+40) 652 3456 23
            </h3>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-medium text-[14px] leading-[22px] text-[#111927]">
                Due date
              </h1>
              <h2 className="font-normal text-[14px] leading-[22px] text-[#111927]">
                06 Feb 2024
              </h2>
            </div>
            <div>
              <h1 className="font-medium text-[14px] leading-[22px] text-[#111927]">
                Date of issue
              </h1>
              <h2 className="font-normal text-[14px] leading-[22px] text-[#111927]">
                01 Feb 2024
              </h2>
            </div>
            <div>
              <h1 className="font-medium text-[14px] leading-[22px] text-[#111927]">
                Number
              </h1>
              <h2 className="font-normal text-[14px] leading-[22px] text-[#111927]">
                INV-0019
              </h2>
            </div>
          </div>
          <div className="flex items-center justify-between py-[37px]">
            <div>
              <h1 className="font-medium text-[14px] leading-[22px] text-[#111927]">
                Billed to
              </h1>
              <h2 className="font-normal text-[14px] leading-[22px] text-[#111927]">
                ACME SRL Countdown Grey Lynn <br /> 6934656584231 <br /> 271
                Richmond Rd, Grey Lynn, Auckland 1022, New Zealand
              </h2>
            </div>
          </div>
          <div className="flex items-center bg-[#F8F9FA] w-[930px] h-[42px]">
            <h1 className="font-semibold text-[12px] leading-[12px] tracking-[1px]  text-[#2F3746] px-[16px]">
              #
            </h1>
            <h2 className="font-semibold text-[12px] leading-[12px] tracking-[0.5px] text-[#2F3746] px-[26px] uppercase">
              Description
            </h2>
            <div className="flex items-center px-[500px] gap-[150px]">
              <p className="font-semibold text-[12px] leading-[12px] tracking-[0.5px] uppercase text-[#2F3746]">
                Unit
              </p>
              <p className="font-semibold text-[12px] leading-[12px] tracking-[0.5px] uppercase text-[#2F3746] ">
                Total
              </p>
            </div>
          </div>
          <div className="flex items-center border-[1.11px]  w-[930px] h-[42px]">
            <h1 className="font-semibold text-[12px] leading-[12px] tracking-[1px]  text-[#2F3746] px-[16px]">
              1
            </h1>
            <h2 className="font-semibold text-[12px] leading-[12px] tracking-[0.5px] text-[#2F3746] px-[26px] uppercase">
              Freelancer Subscription (12/05/2019 - 11/06/2019)
            </h2>
            <div className="flex items-center px-[100px] gap-[150px] transform -translate-x-[-130px]">
              <p className="font-semibold text-[12px] leading-[12px] tracking-[0.5px] uppercase text-[#2F3746]">
                Subtotal
              </p>
            </div>
            <p className="text-[14px] font-normal leading-[22px] text-[#111927] pl-[156px]">
              $55.50
            </p>
          </div>
          <div className="flex items-center px-[670px]  w-[930px] h-[42px]">
            <div className="flex items-end gap-[120px]">
              <p className="font-semibold text-[12px] leading-[12px] tracking-[0.5px] uppercase text-[#2F3746]">
                Taxes
              </p>
            </div>
            <p className="text-[14px] font-normal leading-[22px] text-[#111927] pl-[150px]">
              $50.00
            </p>
          </div>
          <div className="flex items-center px-[670px]  w-[930px] h-[42px]">
            <div className="flex items-end gap-[120px]">
              <p className="font-semibold text-[12px] leading-[12px] tracking-[0.5px] uppercase text-[#2F3746]">
                Total
              </p>
            </div>
            <p className="text-[14px] font-normal leading-[22px] text-[#111927] pl-[152px]">
              $5.50
            </p>
          </div>
          <div className="flex items-center px-[670px]  w-[930px] h-[42px]">
            <div className="flex items-end gap-[120px]">
              <p className="font-semibold text-[12px] leading-[12px] tracking-[0.5px] uppercase text-[#2F3746]">
                Number
              </p>
            </div>
            <p className="text-[14px] font-normal leading-[22px] text-[#111927] pl-[137px]">
              $55.50
            </p>
          </div>
          <div className='flex items-start gap-[8px] py-[30px] flex-col'>
            <h1 className='font-bold text-[17px] leading-[20px] text-[#111927]'>Notes</h1>
            <p className='font-normal text-[14px] leading-[22px] text-[#6C737F]'>Please make sure you have the right bank registration number as I had issues before and make sure you guys cover transfer expenses.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoices;
