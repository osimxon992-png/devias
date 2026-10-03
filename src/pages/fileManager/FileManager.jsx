import { BiSolidArrowToBottom } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiCircleList, CiSearch, CiStar } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import folder from "../../assets/folder.png";
import maleFace from "../../assets/maleFace.png";
import maleFaceFive from "../../assets/maleFaceFive.png";
import maleFaceFour from "../../assets/maleFaceSeven.png";
import maleFaceThree from "../../assets/maleFaceThree.png";
import imgFirst from "../../assets/img1.png";
import pdf from "../../assets/pdf.png"
import svgFile from "../../assets/svgfile.png"
import jpgFile from "../../assets/jpgfile.png"

function FileManager() {
  return (
    <div className=" w-[1392x] h-[1103px] flex flex-col  ">
      <div className=" flex items-center w-full justify-between px-[50px]  ">
        <h1 className=" text-[rgba(17,25,39,1)]  font-bold text-[34px]">
          File Manager
        </h1>
        <button className=" w-[113px] h-[41px] bg-[rgba(99,102,241,1)] rounded-[12px] flex items-center justify-center gap-1.5 text-[rgba(255,255,255,1)] font-semibold text-sm ">
          <MdOutlineFileUpload />
          Upload
        </button>
      </div>
      <div className=' flex  '>
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
          <div className=" cards grid grid-cols-3 w-[1150px]  ">
            <div className=" text-black w-[280px] h-[240px] px-[20px]  rounded-[20px] border border-[rgba(242,244,247,1)] flex flex-col gap-[10px]  ">
              <div className=" flex items-center justify-between px-[20px] py-[20px]">
                <CiStar className=" w-[20px] h-[18px] text-[rgba(108,115,127,1)] " />
                <BsThreeDotsVertical className=" text-[rgba(108,115,127,1)] " />
              </div>
              <img className=" w-[40px] h-[47px] " src={folder} alt="" />
              <h3>AWS Credentials</h3>
              <hr className=" text-[gray] " />
              <div className=" flex items-center gap-[30px]  ">
                <div>
                  <p>503.9 MB• 12 items</p>
                  <p>Created at Feb 01, 2024</p>
                </div>
                <div>
                  <img src={imgFirst} alt="" />
                </div>
              </div>
            </div>
            <div className=" text-black w-[280px] h-[240px] px-[20px]  rounded-[20px] border border-[rgba(242,244,247,1)] flex flex-col gap-[10px]  ">
              <div className=" flex items-center justify-between px-[20px] py-[20px]">
                <CiStar className=" w-[20px] h-[18px] text-[orange] " />
                <BsThreeDotsVertical className=" text-[rgba(108,115,127,1)] " />
              </div>
              <img className=" w-[40px] h-[47px] " src={folder} alt="" />
              <h3>dev 2022</h3>
              <hr className=" text-[gray] " />
              <div className=" flex items-center gap-[30px]  ">
                <div>
                  <p>495.04 MB• 5 items</p>
                  <p>Created at Feb 01, 2024</p>
                </div>
                <div>
                  <img src={maleFaceFour} alt="" />
                </div>
              </div>
            </div>
            <div className=" text-black w-[280px] h-[240px] px-[20px]  rounded-[20px] border border-[rgba(242,244,247,1)] flex flex-col gap-[10px]  ">
              <div className=" flex items-center justify-between px-[20px] py-[20px]">
                <CiStar className=" w-[20px] h-[18px] text-[rgba(108,115,127,1)] " />
                <BsThreeDotsVertical className=" text-[rgba(108,115,127,1)] " />
              </div>
              <img className=" w-[40px] h-[47px] " src={folder} alt="" />
              <h3>AI Resources</h3>
              <hr className=" text-[gray] " />
              <div className=" flex items-center gap-[30px]  ">
                <div>
                  <p>185.22 MB• 3 items</p>
                  <p>Created at Feb 01, 2024</p>
                </div>
                <div>
                  <img src={maleFaceFive} alt="" />
                </div>
              </div>
            </div>
            <div className=" text-black w-[280px] h-[240px] px-[20px]  rounded-[20px] border border-[rgba(242,244,247,1)] flex flex-col gap-[10px]  ">
              <div className=" flex items-center justify-between px-[20px] py-[20px]">
                <CiStar className=" w-[20px] h-[18px] text-[orange] " />
                <BsThreeDotsVertical className=" text-[rgba(108,115,127,1)] " />
              </div>
              <img className=" w-[40px] h-[47px] " src={folder} alt="" />
              <h3>invoices</h3>
              <hr className=" text-[gray] " />
              <div className=" flex items-center gap-[30px]  ">
                <div>
                  <p>697.34 MB• 17 items</p>
                  <p>Created at Feb 01, 2024</p>
                </div>
                <div>
                </div>
              </div>
            </div>
            <div className=" text-black w-[280px] h-[240px] px-[20px]  rounded-[20px] border border-[rgba(242,244,247,1)] flex flex-col gap-[10px]  ">
              <div className=" flex items-center justify-between px-[20px] py-[20px]">
                <CiStar className=" w-[20px] h-[18px] text-[orange] " />
                <BsThreeDotsVertical className=" text-[rgba(108,115,127,1)] " />
              </div>
              <img className=" w-[40px] h-[47px] " src={folder} alt="" />
              <h3>assets</h3>
              <hr className=" text-[gray] " />
              <div className=" flex items-center gap-[30px]  ">
                <div>
                  <p>99.07 MB• 12 items</p>
                  <p>Created at Feb 01, 2024</p>
                </div>
                <div>
                </div>
              </div>
            </div>
            <div className=" text-black w-[280px] h-[240px] px-[20px]  rounded-[20px] border border-[rgba(242,244,247,1)] flex flex-col gap-[10px]  ">
              <div className=" flex items-center justify-between px-[20px] py-[20px]">
                <CiStar className=" w-[20px] h-[18px] text-[orange] " />
                <BsThreeDotsVertical className=" text-[rgba(108,115,127,1)] " />
              </div>
              <img className=" w-[40px] h-[47px] " src={pdf} alt="" />
              <h3>Personal-cv.pdf</h3>
              <hr className=" text-[gray] " />
              <div className=" flex items-center gap-[30px]  ">
                <div>
                  <p>503.9 MB• 12 items</p>
                  <p>Created at Feb 01, 2024</p>
                </div>
                <div>
                  <img src={maleFace} alt="" />
                </div>
              </div>
            </div>
            <div className=" text-black w-[280px] h-[240px] px-[20px]  rounded-[20px] border border-[rgba(242,244,247,1)] flex flex-col gap-[10px]  ">
              <div className=" flex items-center justify-between px-[20px] py-[20px]">
                <CiStar className=" w-[20px] h-[18px] text-[rgba(108,115,127,1)] " />
                <BsThreeDotsVertical className=" text-[rgba(108,115,127,1)] " />
              </div>
              <img className=" w-[40px] h-[47px] " src={svgFile} alt="" />
              <h3>company-logo-white.svg</h3>
              <hr className=" text-[gray] " />
              <div className=" flex items-center gap-[30px]  ">
                <div>
                  <p>503.9 MB• 12 items</p>
                  <p>Created at Feb 01, 2024</p>
                </div>
                <div>
                  <img src={maleFaceFive} alt="" />
                </div>
              </div>
            </div>
            <div className=" text-black w-[280px] h-[240px] px-[20px]  rounded-[20px] border border-[rgba(242,244,247,1)] flex flex-col gap-[10px]  ">
              <div className=" flex items-center justify-between px-[20px] py-[20px]">
                <CiStar className=" w-[20px] h-[18px] text-[rgba(108,115,127,1)] " />
                <BsThreeDotsVertical className=" text-[rgba(108,115,127,1)] " />
              </div>
              <img className=" w-[40px] h-[47px] " src={jpgFile} alt="" />
              <h3>landing_cover1.jpeg</h3>
              <hr className=" text-[gray] " />
              <div className=" flex items-center gap-[30px]  ">
                <div>
                  <p>503.9 MB• 12 items</p>
                  <p>Created at Feb 01, 2024</p>
                </div>
                <div>
                  <img src={maleFaceThree} alt="" />
                </div>
              </div>
            </div>
            <div className=" text-black w-[280px] h-[240px] px-[20px]  rounded-[20px] border border-[rgba(242,244,247,1)] flex flex-col gap-[10px]  ">
              <div className=" flex items-center justify-between px-[20px] py-[20px]">
                <CiStar className=" w-[20px] h-[18px] text-[rgba(108,115,127,1)] " />
                <BsThreeDotsVertical className=" text-[rgba(108,115,127,1)] " />
              </div>
              <img className=" w-[40px] h-[47px] " src={svgFile} alt="" />
              <h3>About-Hero_shape-xl.svg</h3>
              <hr className=" text-[gray] " />
              <div className=" flex items-center gap-[30px]  ">
                <div>
                  <p>503.9 MB• 12 items</p>
                  <p>Created at Feb 01, 2024</p>
                </div>
                <div>
                  <img src={maleFace} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='  w-[161px] h-[900px] bg-amber-300 mt-[140px] '>

        </div> */}
        </div>
    </div>
  );
}

export default FileManager;
