import loginBack from "../../assets/loginBack.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import loginIcon from "../../assets/loginIcon.png";
import loginText from "../../assets/logoText.png";

function Verify() {
  return (
    <div className=" flex items-center gap-[160px] ">
      <div>
        <img className="w-[912px] h-[776px]" src={loginBack} alt="" />
      </div>
      <div className=" flex flex-col items-start gap-[30px] mr-[100px]">
        <div className=" flex items-center gap-[10px] ">
          <img className=" w-[24px] h-[24px] " src={loginIcon} alt="" />
          <img className=" w-[104px] h-[17px] " src={loginText} alt="" />
        </div>
        <div className=" flex items-center gap-[20px]  ">
          <FaArrowLeftLong className=" text-2xl font-medium " />
          <p className=" text-[rgba(17,25,39,1)] text-2xl font-medium ">
            Dashboard
          </p>
        </div>
        <div className=" flex flex-col gap-[10px] ">
          <h3 className=" text-[rgba(17,25,39,1)] font-bold text-3xl ">
            Verify code
          </h3>
          <p>Code</p>
        </div>
        <div className=" flex gap-[16px] ">
          <input
            className=" w-[62px] h-[50px] border border-[rgba(229,231,235,1)] rounded-[8px] "
            type="tel"
          />
          <input
            className=" w-[62px] h-[50px] border border-[rgba(229,231,235,1)] rounded-[8px] "
            type="tel"
          />
          <input
            className=" w-[62px] h-[50px] border border-[rgba(229,231,235,1)] rounded-[8px] "
            type="tel"
          />
          <input
            className=" w-[62px] h-[50px] border border-[rgba(229,231,235,1)] rounded-[8px] "
            type="tel"
          />
          <input
            className=" w-[62px] h-[50px] border border-[rgba(229,231,235,1)] rounded-[8px] "
            type="tel"
          />
          <input
            className=" w-[62px] h-[50px] border border-[rgba(229,231,235,1)] rounded-[8px] "
            type="tel"
          />
        </div>

        <button className=" w-[472px] h-[55px]  bg-[rgba(99,102,241,1)] text-white rounded-[12px]  px-[20px] border-gray-600 ">
          Verify
        </button>
      </div>
    </div>
  );
}

export default Verify;
