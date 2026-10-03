import { BsThreeDots } from "react-icons/bs";
import { FaArrowRight, FaPlus } from "react-icons/fa6";
import bitcoin from "../../assets/logo-bitcoin.svg.png";
import ethcoin from "../../assets/logo-eth.svg fill.png";
import card from "../../assets/credit_card.png";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import color1 from "../../assets/color1.png";
import color2 from "../../assets/color2.png";
import color3 from "../../assets/color3.png";
import button from "../../assets/button.png";
import img from "../../assets/iconly-glass-tick.svg fill.png";
import {
  RiArrowRightDownLongLine,
  RiArrowRightUpLongLine,
} from "react-icons/ri";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import GridDemo from "../../components/gridDemo/GridDemo";
import GridDemoSecond from "../../components/gridDemoSecond/GridDemoSecond";
import DonutChart from "../../components/donutCrypto/DonutCrypto";

function Crypto() {
  return (
    <div>
      <div className="flex items-center justify-between mb-[25px] mt-[32px] ml-[32px] mr-[24px]">
        <h1 className="plus font-bold text-[33.3px] text-[#111927]">Crypto</h1>
        <button className="p-[10px_20px_12px_16px] bg-[#6366F1] flex items-center gap-[8px] rounded-[12px] text-[#FFFFFF] inter font-semibold">
          <FaPlus />
          Add Wallet
        </button>
      </div>
      <div>
        <div className="flex items-center gap-[9px]">
          <div className="flex items-center gap-[15px]">
            <div className="w-[375px] h-[296px] rounded-[20px] bg-[#FFFFFF] shadow-[0_0_0.5px_0.5px_rgba(0,0,0,0.03),0_5px_22px_0_rgba(0,0,0,0.04)] ml-[32px]">
              <div className="pt-[31px] pl-[24px] flex justify-between items-center pr-[24px]">
                <div>
                  <div className="flex items-center gap-[3px]">
                    <b className="text-[#111927] text-[17px]">0.7568</b>
                    <p className="text-[#6C737F] text-[17px]">BTC</p>
                    <br />
                  </div>
                  <p className="text-[#6C737F]">$16,213.20</p>
                </div>
                <div className="flex items-center gap-[8px] mt-[16px]">
                  <BsThreeDots className="text-[#6C737F] text-[17px]" />
                </div>
              </div>
              <GridDemo />
              <div>
                <div className="flex items-center">
                  <img
                    className="mt-[17px] ml-[16px] mr-[23px]"
                    src={bitcoin}
                    alt=""
                  />
                  <div className="mt-[17px]">
                    <p className="text-[#111927]">BTC/USD</p>
                    <div className="flex items-center gap-[4px]">
                      <FaChevronUp className="text-[#10B981]" />
                      <p className="text-[#10B981]">0.56%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[375px] h-[296px] rounded-[20px] bg-[#FFFFFF] shadow-[0_0_0.5px_0.5px_rgba(0,0,0,0.03),0_5px_22px_0_rgba(0,0,0,0.04)] ml-[32px]">
              <div className="pt-[31px] pl-[24px] flex justify-between items-center pr-[24px]">
                <div>
                  <div className="flex items-center gap-[3px]">
                    <b className="text-[#111927] text-[17px]">2.0435</b>
                    <p className="text-[#6C737F] text-[17px]">ETH</p>
                    <br />
                  </div>
                  <p className="text-[#6C737F]">$9,626.80</p>
                </div>
                <div className="flex items-center gap-[8px] mt-[16px]">
                  <BsThreeDots className="text-[#6C737F] text-[17px]" />
                </div>
              </div>
              <GridDemoSecond />
              <div>
                <div className="flex items-center">
                  <img
                    className="mt-[17px] ml-[16px] mr-[23px]"
                    src={ethcoin}
                    alt=""
                  />
                  <div className="mt-[17px]">
                    <p className="text-[#111927]">ETH/USD</p>
                    <div className="flex items-center gap-[4px]">
                      <FaChevronDown className="text-[#F04438]" />
                      <p className="text-[#F04438]">-0.32%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className="rounded-[10px]" src={card} alt="" />
          </div>
        </div>
      </div>
      <div></div>
      <div className="flex items-center gap-[9px]">
        <div>
          <div className="w-[890px] h-[490px] rounded-[20px] bg-[#FFFFFF] shadow-[0_0_0.5px_0.5px_rgba(0,0,0,0.03),0_5px_22px_0_rgba(0,0,0,0.04)] ml-[32px] mt-[32px] ">
            <div className="pt-[32px] pl-[24px]">
              <h2 className="text-[24px] font-bold text-[#111927] ">
                Current Balance
              </h2>
              <p className="text-[#6C737F]">Balance across all your accounts</p>
            </div>
            <div className="flex items-center  gap-[24px]">
              <DonutChart />
              <div>
                <h3 className="text-[#6C737F] pt-[62px] text-[12px]">
                  TOTAL BALANCE
                </h3>
                <p className="text-[#111927] text-[34px] font-bold pt-[16px]">
                  $35,916.81
                </p>
                <p className="text-[#6C737F] text-[12px] pt-[30px]">
                  Available currency
                </p>
                <div className="flex items-center justify-between gap-[440px]">
                  <div>
                    <div className="flex items-center gap-[8px] pt-[12px]">
                      <img src={color1} alt="" />
                      <p className="text-[#111927] text-[14px]">Bitcoin</p>
                    </div>
                    <div className="flex items-center gap-[8px] pt-[12px]">
                      <img src={color2} alt="" />
                      <p className="text-[#111927] text-[14px]">Ethereum</p>
                    </div>
                    <div className="flex items-center gap-[8px] pt-[12px]">
                      <img src={color3} alt="" />
                      <p className="text-[#111927] text-[14px]">US Dollars</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#6C737F] text-[14px] pt-[12px]">
                      $16,213.20
                    </p>
                    <p className="text-[#6C737F] text-[14px] pt-[12px]">
                      $9,626.80
                    </p>
                    <p className="text-[#6C737F] text-[14px] pt-[12px]">
                      $10,076.81
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center text-[#111927] font-bold gap-[20px] mt-[19px] ml-[20px]">
              <p className="flex items-center gap-[4px]">
                All funds <RiArrowRightUpLongLine />
              </p>
              <p className="flex items-center gap-[4px]">
                Transfer funds <RiArrowRightDownLongLine />
              </p>
            </div>
          </div>
          <div className="w-[890px] h-[290px] shadow-[0_0_0.5px_0.5px_rgba(0,0,0,0.03),0_5px_22px_0_rgba(0,0,0,0.04)] bg-[#FFFFFF] rounded-[20px] ml-[32px] mt-[32px] mb-[64px]  ">
            <h3 className="text-[#111927] font-bold text-[16px] pt-[32px] pl-[24px]">
              Transactions
            </h3>
            <div>
              <div className="flex mt-[15px] pl-[24px] pr-[24px] items-center gap-[15px] justify-between">
                <div className="flex items-center gap-[15px]">
                  <div className="bg-[#10B9810A] rounded-[50%] w-[40px] h-[40px] text-[#10B981] flex items-center justify-center font-bold ">
                    <GoArrowUpRight />
                  </div>
                  <div>
                    <h3 className="text-[#111927] font-bold text-[14px]">
                      Buy BTC
                    </h3>
                    <p className="text-[#6C737F] text-[14px]">
                      01.29.2024 / 09:36 AM
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[#10B981]">+ 0.1337 BTC</p>
                  <p className="text-[#6C737F] text-[14px]">$4,805.00</p>
                </div>
              </div>
              <hr className="border-[#E4E7EC] mt-[15px]" />
              <div className="flex mt-[15px] pl-[24px] pr-[24px] items-center gap-[15px] justify-between">
                <div className="flex items-center gap-[15px]">
                  <div className="bg-[#F044380A] rounded-[50%] w-[40px] h-[40px] text-[#F04438] flex items-center justify-center font-bold ">
                    <GoArrowDownRight />
                  </div>
                  <div>
                    <h3 className="text-[#111927] font-bold text-[14px]">
                      Sell BTC
                    </h3>
                    <p className="text-[#6C737F] text-[14px]">
                      01.24.2024 / 08:47 AM
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[#F04438]">- 0.2105 BTC</p>
                  <p className="text-[#6C737F] text-[14px]">$2,344.00</p>
                </div>
              </div>
              <hr className="border-[#E4E7EC] mt-[30px]" />
              <p className="text-[#111927] ml-[24px] mt-[15px] flex items-center gap-[7px] font-bold">
                See all <FaArrowRight />
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="w-[429px] h-[425px] shadow-[0_0_0.5px_0.5px_rgba(0,0,0,0.03),0_5px_22px_0_rgba(0,0,0,0.04)] bg-[#FFFFFF] rounded-[20px] ml-[32px] mt-[32px] mb-[32px]  ">
            <div className="pt-[41px] pl-[24px] flex items-center justify-between pr-[16px]">
              <h3 className="text-[#111927] font-bold text-[17px] ">
                Operation
              </h3>
              <div className="flex items-center gap-[24px]">
                <a className="text-[#6366F1]">Buy</a>
                <p className="text-[#6C737F]">Sell</p>
              </div>
            </div>
            <div className="border border-[#E5E7EB] w-[381px] h-[64px] rounded-[8px] ml-[24px] mt-[25px] pl-[12px] ">
              <p className="text-[#6C737F] pt-[6px]">From</p>
              <div className="flex items-center gap-[8px]">
                <img className="w-[24px] h-[24px]" src={bitcoin} alt="" />
                <p className="text-[#111927]">0.4567</p>
              </div>
            </div>
            <img className="ml-[204px] mt-[16px]" src={button} alt="" />
            <div className="border border-[#E5E7EB] w-[381px] h-[64px] rounded-[8px] ml-[24px] mt-[25px] pl-[12px] ">
              <p className="text-[#6C737F] pt-[6px]">To</p>
              <div className="flex items-center gap-[8px]">
                <img className="w-[24px] h-[24px]" src={ethcoin} alt="" />
                <p className="text-[#111927]">5.9093</p>
              </div>
            </div>
            <p className="text-[#6C737F] text-[14px] ml-[24px] mt-[18px] mb-[10px]">
              1 BTC = $20,024.90
            </p>
            <button className="bg-[#6366F1] text-[#FFFFFF] rounded-[12px] w-[381px] h-[48px] ml-[24px]">
              Buy Ethereum
            </button>
          </div>
          <div className="w-[429px] h-[355px] shadow-[0_0_0.5px_0.5px_rgba(0,0,0,0.03),0_5px_22px_0_rgba(0,0,0,0.04)] bg-[#FFFFFF] rounded-[20px] ml-[32px] mt-[32px] mb-[64px]  ">
            <img className="mt-[24px] ml-[164px] mb-[22px]" src={img} alt="" />
            <h3 className="text-[#111927] font-bold text-[17px] ml-[90px] ">
              Upgrade your account to PRO.
            </h3>
            <p className="text-[#111927] text-center text-[14px] w-[332px] ml-[49px] mt-[18px]">
              Unlock exclusive features like Test Networks, Test Swaps, and
              more.
            </p>
            <button className="bg-[#6366F1] text-[#FFFFFF] rounded-[12px] w-[98px] h-[40px] ml-[165px] mt-[19px] text-[14px]">
              Upgrade
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crypto;
