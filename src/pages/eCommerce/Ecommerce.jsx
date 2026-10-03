import { MdRefresh } from "react-icons/md";
import card_img1 from "../../assets/iconly-glass-tick.svg fill.png";
import card_img2 from "../../assets/iconly-glass-chart.svg fill.png";
import card_img3 from "../../assets/iconly-glass-discount.svg fill.png";
import hero2 from "../../assets/hero2.png";
import flag1 from "../../assets/flag1.png";
import flag2 from "../../assets/flag2.png";
import flag3 from "../../assets/flag3.png";
import flag4 from "../../assets/flag4.png";
import flag5 from "../../assets/flag5.png";
import line1 from "../../assets/lin1.png";
import line2 from "../../assets/line2.png";
import line3 from "../../assets/line3.png";
import line4 from "../../assets/line4.png";
import line5 from "../../assets/line5.png";
import RecessionBands from "../../components/recessionBands/RecessionBands";
import { BsThreeDots } from "react-icons/bs";
import img1 from "../../assets/ecommerce-img1.png";
import img2 from "../../assets/ecommerce-img2.png";
import img3 from "../../assets/ecommerce-img3.png";
import img4 from "../../assets/ecommerce-img4.png";
import img5 from "../../assets/ecommerce-img5.png";
import { FaArrowRight } from "react-icons/fa";
import TopChannelsDonutChart from "../../components/topChannelsDonutChart/TopChannelsDonutChart";

function Ecommerce() {
  return (
    <div>
      <div className="flex items-center justify-between mb-[25px] mt-[32px] ml-[32px] mr-[24px]">
        <h1 className="plus font-bold text-[33.3px] text-[#111927]">
          E-Commerce
        </h1>
        <button className="p-[10px_20px_12px_16px] bg-[#6366F1] flex items-center gap-[8px] rounded-[12px] text-[#FFFFFF] inter font-semibold">
          <MdRefresh />
          Sync Data
        </button>
      </div>
      <div className="flex  gap-[32px] mb-[50px]">
        <div>
          <div className="w-[778.66px] h-[230px] shadow-[0_0_0.5px_0.5px_rgba(0,0,0,0.03),0_5px_22px_0_rgba(0,0,0,0.04)] bg-[#FFFFFF] rounded-[20px] ml-[25px] pt-[31px] pl-[24px] ">
            <h3 className="text-[20px] font-bold text-[#111927]">
              Today's Stats
            </h3>
            <div className="flex items-center gap-[24px] mt-[16px]">
              <div className="w-[227px] h-[113px] bg-[#FEF3F2] rounded-[20px] pl-[24px] flex items-center gap-[16px]">
                <img className="w-[48px] h-[48px]" src={card_img2} alt="" />{" "}
                <div>
                  <p className="text-[#6C737F]">Sales</p>{" "}
                  <h3 className="text-[23px] font-bold text-[#111927]">
                    $152k
                  </h3>
                </div>
              </div>
              <div className="w-[227px] h-[113px] bg-[#FFFAEB] rounded-[20px] pl-[24px] flex items-center gap-[16px]">
                <img className="w-[48px] h-[48px]" src={card_img3} alt="" />{" "}
                <div>
                  <p className="text-[#6C737F]">Cost</p>{" "}
                  <h3 className="text-[23px] font-bold text-[#111927]">
                    $99.7k
                  </h3>
                </div>
              </div>
              <div className="w-[227px] h-[113px] bg-[#F0FDF9] rounded-[20px] pl-[24px] flex items-center gap-[16px]">
                <img className="w-[48px] h-[48px]" src={card_img1} alt="" />{" "}
                <div>
                  <p className="text-[#6C737F]">Profit</p>{" "}
                  <h3 className="text-[23px] font-bold text-[#111927]">
                    $32.1k
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[778.66px] h-[435px] shadow-[0_0_0.5px_0.5px_rgba(0,0,0,0.03),0_5px_22px_0_rgba(0,0,0,0.04)] bg-[#FFFFFF] rounded-[20px] ml-[25px] mt-[32px] pt-[31px] pl-[24px] ">
            <h3 className="text-[20px] font-bold text-[#111927]">
              Sales Revenue
            </h3>
            <RecessionBands />
          </div>
          <div className="w-[778.66px] h-[510px] shadow-[0_0_0.5px_0.5px_rgba(0,0,0,0.03),0_5px_22px_0_rgba(0,0,0,0.04)] bg-[#FFFFFF] rounded-[20px] ml-[25px] mt-[32px] pt-[31px] pl-[24px] flex mb-[30px] ">
            <div>
              <h3 className="text-[20px] font-bold text-[#111927]">
                Sales by Country
              </h3>
              <img
                src={hero2}
                alt=""
                className="mt-[37px] ml-[15px] pt-[100px]"
              />
            </div>
            <div>
              <p className="text-[#6C737F] ">Total</p>
              <p className="text-[23px] font-bold text-[#111927]">$152K</p>
              <div className="flex items-center gap-[14px] mt-[28px]">
                <img src={flag1} alt="" />
                <div>
                  <p className="text-[#111927] mb-[18px]">United States</p>
                  <img src={line1} alt="" />
                </div>
                <p className="text-[#111927]">60%</p>
              </div>
              <div className="flex items-center gap-[14px] mt-[28px]">
                <img src={flag2} alt="" />
                <div>
                  <p className="text-[#111927] mb-[18px]">Spain</p>
                  <img src={line2} alt="" />
                </div>
                <p className="text-[#111927]">20%</p>
              </div>
              <div className="flex items-center gap-[14px] mt-[28px]">
                <img src={flag3} alt="" />
                <div>
                  <p className="text-[#111927] mb-[18px]">United Kingdom</p>
                  <img src={line3} alt="" />
                </div>
                <p className="text-[#111927]">10%</p>
              </div>
              <div className="flex items-center gap-[14px] mt-[28px]">
                <img src={flag4} alt="" />
                <div>
                  <p className="text-[#111927] mb-[18px]">Germany</p>
                  <img src={line4} alt="" />
                </div>
                <p className="text-[#111927]">5%</p>
              </div>
              <div className="flex items-center gap-[14px] mt-[28px]">
                <img src={flag5} alt="" />
                <div>
                  <p className="text-[#111927]">Canada</p>
                  <img src={line5} alt="" />
                </div>
                <p className="text-[#111927]">5%</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-[373.33px] h-[686px] bg-[#FFFFFF] shadow-[0_0_0.5px_0.5px_rgba(0,0,0,0.03),0_5px_22px_0_rgba(0,0,0,0.04)] rounded-[20px] ">
            <div className="flex items-center justify-between pt-[37.2px] pl-[24px] pr-[24px]">
              <h3 className="text-[#111927] text-[16.7] font-bold">
                Top Selling Products
              </h3>
              <BsThreeDots className="text-[#6C737F] w-[24px] h-[24px]" />
            </div>
            <div>
              <div className="flex items-center ">
                <div className="flex items-center gap-[16px] pt-[15px] pl-[16px] w-[225px] h-[110px]">
                  <img src={img1} alt="" />
                  <p className="text-[#111927] text-[14px] w-[98px]">
                    Healthcare Erbology <br />
                    <span className="text-[#6C737F]">in Accessories</span>
                  </p>
                </div>
                <div className="w-[81px] h-[110px] pt-[43px] pl-[16px]">
                  <p className="text-[#10B981] text-[14px]">13,153</p>
                  <p className="text-[#6C737F] text-[14px] ">in sales</p>
                </div>
                <div className="w-[66px] h-[110px] pt-[50px] pl-[18.54px]">
                  <div className="w-[31.55px] h-[29.98px] rounded-[12px] bg-[#E5E7EB] text-[#111927] flex items-center justify-center">
                    #1
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex items-center">
                <div className="flex items-center gap-[16px] pt-[15px] pl-[16px] w-[225px] h-[110px]">
                  <img src={img2} alt="" />
                  <p className="text-[#111927] text-[14px] w-[120px]">
                    Makeup Lancome Rouge
                    <br />
                    <span className="text-[#6C737F]">in Accessories</span>
                  </p>
                </div>
                <div className="w-[81px] h-[110px] pt-[43px] pl-[16px]">
                  <p className="text-[#10B981] text-[14px]">10,300</p>
                  <p className="text-[#6C737F] text-[14px] ">in sales</p>
                </div>
                <div className="w-[66px] h-[110px] pt-[50px] pl-[18.54px]">
                  <div className="w-[31.55px] h-[29.98px] rounded-[12px] bg-[#E5E7EB] text-[#111927] flex items-center justify-center">
                    #2
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex items-center">
                <div className="flex items-center gap-[16px] pt-[15px] pl-[16px] w-[225px] h-[110px]">
                  <img src={img3} alt="" />
                  <p className="text-[#111927] text-[14px] w-[98px]">
                    Lounge Puff Fabric Slipper <br />
                    <span className="text-[#6C737F]">in Accessories</span>
                  </p>
                </div>
                <div className="w-[81px] h-[110px] pt-[43px] pl-[16px]">
                  <p className="text-[#10B981] text-[14px]">5,300</p>
                  <p className="text-[#6C737F] text-[14px] ">in sales</p>
                </div>
                <div className="w-[66px] h-[110px] pt-[50px] pl-[18.54px]">
                  <div className="w-[31.55px] h-[29.98px] rounded-[12px] bg-[#E5E7EB] text-[#111927] flex items-center justify-center">
                    #3
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex items-center">
                <div className="flex items-center gap-[16px] pt-[15px] pl-[16px] w-[225px] h-[110px]">
                  <img src={img4} alt="" />
                  <p className="text-[#111927] text-[14px] w-[98px]">
                    Skincare Necessaire <br />
                    <span className="text-[#6C737F]">in Accessories</span>
                  </p>
                </div>
                <div className="w-[81px] h-[110px] pt-[43px] pl-[16px]">
                  <p className="text-[#10B981] text-[14px]">1,203</p>
                  <p className="text-[#6C737F] text-[14px] ">in sales</p>
                </div>
                <div className="w-[66px] h-[110px] pt-[50px] pl-[18.54px]">
                  <div className="w-[31.55px] h-[29.98px] rounded-[12px] bg-[#E5E7EB] text-[#111927] flex items-center justify-center">
                    #4
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex items-center">
                <div className="flex items-center gap-[16px] pt-[15px] pl-[16px] w-[225px] h-[110px]">
                  <img src={img5} alt="" />
                  <p className="text-[#111927] text-[14px] w-[98px]">
                    Skincare Soja CO
                    <br />
                    <span className="text-[#6C737F]">in Accessories</span>
                  </p>
                </div>
                <div className="w-[81px] h-[110px] pt-[43px] pl-[16px]">
                  <p className="text-[#10B981] text-[14px]">254</p>
                  <p className="text-[#6C737F] text-[14px] ">in sales</p>
                </div>
                <div className="w-[66px] h-[110px] pt-[50px] pl-[18.54px]">
                  <div className="w-[31.55px] h-[29.98px] rounded-[12px] bg-[#E5E7EB] text-[#111927] flex items-center justify-center">
                    #5
                  </div>
                </div>
              </div>
              <hr />
              <p className="flex items-center text-[#111927] gap-[7.68px] pl-[286px] pt-[18px]">See All <FaArrowRight/></p>
            </div>
          </div>
          <div className="w-[373.33px] h-[560px]  bg-[#FFFFFF] shadow-[0_0_0.5px_0.5px_rgba(0,0,0,0.03),0_5px_22px_0_rgba(0,0,0,0.04)] rounded-[20px] mt-[32px]">
            <h3 className="text-[#111927] text-[16.7px] font-bold pl-[24px] ">Cost Breakdown</h3>
            <h3 className="text-[#6C737F] text-[14px] pl-[24px]"> Based on selected period</h3>
            <div className="pl-[40px] mt-[48px]">
              <TopChannelsDonutChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
