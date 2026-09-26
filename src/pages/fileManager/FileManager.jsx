import { BiSolidArrowToBottom } from "react-icons/bi";
import { BsThreeDotsVertical } from 'react-icons/bs';
import { CiCircleList, CiSearch, CiStar } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

function FileManager() {
  return (
    <div className=" w-[1392x] h-[1103px] flex flex-col  ">
      <div className=" flex items-center w-full justify-between px-[50px] ">
        <h1 className=" text-[rgba(17,25,39,1)]  font-bold text-[34px]">
          File Manager
        </h1>
        <button className=" w-[113px] h-[41px] bg-[rgba(99,102,241,1)] rounded-[12px] flex items-center justify-center gap-1.5 text-[rgba(255,255,255,1)] font-semibold text-sm ">
          <MdOutlineFileUpload />
          Upload
        </button>
      </div>
      <div>
        <div>
          <div className=" header_input px-[40px] py-[20px] flex items-center gap-[20px]">
            <div className=" input text-black flex items-center w-[447px] h-[48px] border text-[20px] gap-2 px-[20px] border-gray-400 rounded-2xl ">
              <CiSearch className=" text-[30px] text-gray-500 " />
              <input
                className=" ::placeholder: text-gray-500 "
                type="text"
                placeholder="Search"
              />
            </div>
            <div className=" text-black flex gap-[20px] border items-center justify-center  border-gray-400 rounded-2xl w-[120px] h-[52px]">
              <div className=" w-[41px] h-[41px] bg-[rgba(17,25,39,0.08)] flex items-center justify-center rounded-[8px] ">
                <RxDashboard />
              </div>
              <div className=" text-[rgba(108,115,127,1)] w-[41px] h-[41px] flex items-center justify-center ">
                <CiCircleList />
              </div>
            </div>
            <div className=" w-[101px]  h-[55px] flex items-center justify-center gap-1.5 text-black border-gray-400 rounded-2xl border ">
              <div>
                <p className=" text-[rgba(108,115,127,1)] ">Sort By</p>
                <p>Latest</p>
              </div>
              <div>
                <FaCaretDown />
              </div>
            </div>
          </div>
          <div className=' cards  '>
        <div className=' text-black '>
          <div > <CiStar /> <BsThreeDotsVertical /> </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default FileManager;
