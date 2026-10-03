import { useState } from "react";
import loginBack from "../../assets/loginBack.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import loginIcon from "../../assets/loginIcon.png";
import loginText from "../../assets/logoText.png";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className=" flex items-center gap-[160px] ">
      <div>
        <img className=" w-[912px] h-[776px] " src={loginBack} alt="" />
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
            Register
          </h3>
          <p className=" text-[rgba(108,115,127,1)] ">
            Already have an account?
            <Link to={"/login"}>
              <span className=" text-[rgba(99,102,241,1)] ">Log in</span>
            </Link>
          </p>
        </div>
        <input
          className=" outline-0 w-[472px] h-[55px] rounded-[8px] border border-2 px-[20px] border-gray-300 "
          type="email"
          placeholder="Name"
        />

        <input
          className=" outline-0 w-[472px] h-[55px] rounded-[8px] border border-2 px-[20px] border-gray-300 "
          type="email"
          placeholder="Email Address"
        />
        <input
          className="outline-0 w-[472px] h-[55px] rounded-[8px] border border-2 px-[20px] border-gray-300 "
          type="password"
          placeholder=" Password "
        />
        <p className=" text-[rgba(108,115,127,1)] ">
          <input type="checkbox" /> I have read the{" "}
          <span className=" text-[rgba(99,102,241,1)] ">
            Terms and conditions
          </span>
        </p>
        <button className=" w-[472px] h-[55px]  bg-[rgba(99,102,241,1)] text-white rounded-[12px]  px-[20px] border-gray-600 ">
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
