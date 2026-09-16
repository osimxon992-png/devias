import bg from "../../assets/bg.png"
import femaleFaceBig from "../../assets/femaleFaceBig.png"
import { FaPaperclip, FaRegEnvelope, FaRegHeart, FaUserPlus } from 'react-icons/fa'
import { TiMessages } from 'react-icons/ti'
import { HiDotsHorizontal } from 'react-icons/hi'
import opa from "../../assets/div.MuiAvatar-root.png";
import { GrGallery } from 'react-icons/gr'
import { FaRegFaceSmile } from 'react-icons/fa6'
import { RxLink2 } from 'react-icons/rx'
import { BsShare, BsToggles } from 'react-icons/bs'
import { IoBagOutline, IoBookOutline } from 'react-icons/io5'
import { AiOutlineHome } from 'react-icons/ai'
import { CiClock2 } from 'react-icons/ci'
import growBig from "../../assets/growBig.png";
import { Link } from 'react-router-dom'
import maleFace from "../../assets/maleFace.png"
import maleFaceFive from "../../assets/maleFaceFive.png"
import femaleFaceTwo from "../../assets/femaleFaceTwo.png"
import femaleFace6 from "../../assets/femaleFace6.png"

const SocialMeadiaOne = () => {
  return (
    <div className='max-w-[1540px] w-full m-auto'>
      <div className='px-[25px] pt-[25px]'>
        <div className='flex items-center justify-center mb-[40px]'><img src={bg} alt="" /></div>
        <div className='flex justify-between mb-[55px]'>
          <div className='flex items-center gap-[16px]'>
            <img src={femaleFaceBig} alt="" />
            <div>
              <p className='text-[#6C737F]'>PRODUCT DESIGNER</p>
              <h4 className='font-bold text-base text-[#111927]'>Anika Visser</h4>
            </div>
          </div>
          <div className='flex gap-[16px] items-center'>
            <button className='w-[111px] h-[36px] flex items-center gap-[5px] border-1 border-[#6366F180] flex items-center justify-center rounded-[12px] text-[#6366F1]'><FaUserPlus /> Connect</button>
            <button className='w-[148px] h-[34px] flex items-center gap-[5px] bg-[#6366F1] flex items-center justify-center rounded-[12px] text-white'><TiMessages /> Send Message</button>
            <HiDotsHorizontal className='text-[#6C737F]'/>
          </div>
        </div>
        <div className='flex gap-[20px] mb-[5px]'>
          <span className='text-[#6366F1]'>Timeline</span> <span className='text-[#6C737F]'>Connections</span>
        </div>
        <div className='flex mb-[25px]'>
          <div className='w-[60px] h-[2px] bg-[#6366F1]'></div>
          <div className='w-[1080px] h-[3px] bg-[#F2F4F7]'></div>
        </div>
        <div className='flex gap-[50px]'>
          <div>
            <div className='w-[362px] h-[173px] border-2 border-[#0000000A] py-[30px] px-[24px] mb-[30px]'>
          <h4 className='font-bold text-base text-[#111927] mb-[45px]'>Profile Progress</h4>
          <div className='flex mb-[18px]'>
            <div className='w-[150px] h-[4px] bg-[#6366F1]'></div>
             <div className='w-[150px] h-[4px] bg-[#C3C4F9]'></div>
          </div>
          <p className='text-[#6C737F]'>50% Set Up Complete</p>
        </div>
        <div className='w-[362px] h-[455px] py-[32px] px-[24px] border-2 border-[#0000000A]'>
          <h4 className='font-bold text-sm text-[#111927] mb-[30px]'>About</h4>
          <p className='text-[#6C737F] mb-[30px]'>"Everyone thinks of changing the world, but no
one thinks of changing himself."</p>
<div className='flex items-center gap-[25px] mb-[20px]'>
  <IoBagOutline />
  <div>
    <p className='font-medium text-sm text-[#111927]'>Product Designer at Devias IO</p>
    <p className='text-[#6C737F] w-[250px]'>Past: UX Designer Focus Aesthetic Dynamics</p>
  </div>
</div>
<div className='flex gap-[25px] mb-[20px] items-center'>
  <IoBookOutline />
  <p className='text-[#6C737F]'>Add school or collage</p>
</div>
<div className='flex gap-[25px] mb-[20px] items-center'>
  <AiOutlineHome />
  <div>
    <p className='font-medium text-sm text-[#111927]'>Lives in Bucharest</p>
    <p className='text-[#6C737F]'>Originally from Rm. Valcea</p>
  </div>
</div>
<div className='flex gap-[25px] mb-[20px] items-center'>
  <FaRegEnvelope />
  <p className='font-medium text-sm text-[#111927]'>anika.visser@devias.io</p>
</div>
        </div>
          </div>
        <div> 
          <div className='border-2 border-[#0000000A] py-[28px] px-[23px] mb-[25px]'>
          <div className='flex gap-[15px] mb-[30px]'>
            <div><img width={40} src={opa} alt="" /></div>
            <div className='w-[500px] h-[109px] border-2 border-[#0000000A] py-[15px] px-[15px]'>
              <input type="text" placeholder='Whats on your mind'/>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex text-[#6C737F] gap-[20px] text-lg pl-[55px]'>
              <GrGallery />
                        <FaPaperclip />
                        <RxLink2 className='text-xl'/>
                        <FaRegFaceSmile />
            </div>
              <button className='w-[70px] h-[40px] bg-[#6366F1] text-white rounded-[12px]'>Post</button>
          </div>
</div>
          <div className='w-[605px] py-[20px] px-[23px] border-2 border-[#0000000A] mb-[25px]'>
            <div className='flex gap-[15px] items-center mb-[20px]'>
              <img width={40} src={opa} alt="" />
              <div>
                <p>Anika Visser updated her status</p>
                <p className='text-[#6C737F] flex items-center gap-[5px]'><CiClock2 /> 4 hours ago</p>
              </div>
            </div>
            <p className='mb-[20px]'>Just made this overview screen for a project, what-cha thinkin?</p>
            <img className='mb-[20px]' src={growBig} alt="" />
            <div className='flex justify-between mb-[50px]'>
              <p className='flex items-center gap-[5px]'><FaRegHeart className='text-[#F04438]'/> 24</p>
              <BsShare />
              </div>
              <div className='flex mb-[15px] gap-[15px]'>
                      <div><img src={maleFace} alt="" /></div>
                      <div className='w-[500px] h-[83px] bg-[#F3F4F6] flex justify-between py-[15px] px-[15px]'>
                        <div>
                          <p className='font-medium text-sm text-[#111927] mb-[10px]'>Jie Yan Song</p>
                          <p className='text-sm'>Could use some more statistics, but that’s me haha</p>
                        </div>
                        <p className='text-[#6C737F] text-xs'>3 hours ago</p>
                      </div>
                    </div>
              <div className='flex  gap-[15px] mb-[44px]'>
        <div><img src={maleFaceFive} alt="" /></div>
        <div className='w-[500px] h-[83px] bg-[#F3F4F6] flex justify-between py-[5px] px-[5px]'>
          <div>
            <p className='font-medium text-sm text-[#111927] mb-[10px]'>Penjani Inyene</p>
            <p className='text-sm'>Hmm, honestly this looks nice but I would change the shadow though</p>
          </div>
          <p className='text-[#6C737F] text-xs w-[100px]'>2 hours ago</p>
        </div>
      </div>
      <div className='flex gap-[15px] mb-[25px]'>
        <div><img width={40} src={opa} alt="" /></div>
        <div className='w-[500px] h-[109px] bg-[#F3F4F6] py-[20px] px-[15px]'>
          <input type="text" placeholder='Type your reply'/>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <div className='text-[#6C737F] flex gap-[26px] pl-[55px]'>
          <GrGallery />
          <FaPaperclip />
          <RxLink2 className='text-xl'/>
          <FaRegFaceSmile />
        </div>
        <Link to={"/"}>
        <button className='w-[74px] h-[40px] bg-[#6366F1] rounded-[12px] text-white mr-[35px]'>Send</button>
        </Link>
      </div>
            
          </div>
          <div className='w-[605px] py-[20px] px-[23px] border-2 border-[#0000000A]'>
          <div className='flex gap-[15px] items-center mb-[20px]'>
            <img width={40} src={opa} alt="" />
            <div>
              <p>Anika Visser updated her status</p>
              <p className='flex items-center gap-[5px] text-[#6C737F]'><CiClock2 /> 7 hours ago</p>
            </div>
          </div>
          <p className='mb-[30px]'>As a human being, you are designed in a way that makes you incapable of experiencing any
positive emotion unless you set an aim and progress towards it. What makes you happy is
not, in fact, attaining it, but making progress towards it.</p>
<div className='flex justify-between mb-[25px]'>
              <p className='flex items-center gap-[5px] text-[#6C737F]'><FaRegHeart /> 65</p>
              <BsShare />
              </div>
             <div className='flex items-center justify-center mb-[25px]'>
               <div className='w-[444px] h-[3px] bg-[#F2F4F7]'></div>
             </div>
             <div className='flex mb-[15px] gap-[15px]'>
                      <div><img src={femaleFaceTwo} alt="" /></div>
                      <div className='w-[500px] h-[83px] bg-[#F3F4F6] flex justify-between py-[15px] px-[15px]'>
                        <div>
                          <p className='font-medium text-sm text-[#111927] mb-[10px]'>Iulia Albu</p>
                          <p className='text-sm'>That’s actually deep. Thanks for the design, would you consider making an interaction?</p>
                        </div>
                        <p className='text-[#6C737F] text-xs'>3 hours ago</p>
                      </div>
                    </div>
              <div className='flex  gap-[15px] mb-[44px]'>
        <div><img src={femaleFace6} alt="" /></div>
        <div className='w-[500px] h-[83px] bg-[#F3F4F6] flex justify-between py-[5px] px-[5px]'>
          <div>
            <p className='font-medium text-sm text-[#111927] mb-[10px]'>Fran Perez</p>
            <p className='text-sm'>Oh... so sentimental</p>
          </div>
          <p className='text-[#6C737F] text-xs w-[100px]'>2 hours ago</p>
        </div>
      </div>
      <div className='flex gap-[15px] mb-[25px]'>
        <div><img width={40} src={opa} alt="" /></div>
        <div className='w-[500px] h-[109px] bg-[#F3F4F6] py-[20px] px-[15px]'>
          <input type="text" placeholder='Type your reply'/>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <div className='text-[#6C737F] flex gap-[26px] pl-[55px]'>
          <GrGallery />
          <FaPaperclip />
          <RxLink2 className='text-xl'/>
          <FaRegFaceSmile />
        </div>
        <Link to={"/"}>
        <button className='w-[74px] h-[40px] bg-[#6366F1] rounded-[12px] text-white mr-[35px]'>Send</button>
        </Link>
      </div>
          </div>
        </div>
        <div className='flex items-center'>
          <div className='w-[43px] h-[43px] rounded-[50%] bg-[#6366F1] flex items-center justify-center text-white'><BsToggles /></div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default SocialMeadiaOne
