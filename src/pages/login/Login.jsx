import loginBack from "../../assets/loginBack.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import loginIcon from "../../assets/loginIcon.png";
import loginText from "../../assets/logoText.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className=" flex items-center gap-[30px] ">
      <div>
        <img className=" w-[720px] " src={loginBack} alt="" />
      </div>
      <div className=" flex flex-col items-start gap-[30px] ">
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
            Log in
          </h3>
          <p className=" text-[rgba(108,115,127,1)] ">
            Don't have an account?
            <Link to={"/register"}>
              <span className=" text-[rgba(99,102,241,1)] ">Register</span>
            </Link>
          </p>
        </div>
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
        <button className=" w-[472px] h-[55px]  bg-[rgba(99,102,241,1)] text-white rounded-[12px]  px-[20px] border-gray-600 ">
          Continue
        </button>
        <Link to={"/forgotPassword"}>
        
          <p className=" text-[rgba(99,102,241,1)] ">Forgot Password?</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
