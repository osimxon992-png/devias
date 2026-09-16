import { GrGallery } from 'react-icons/gr';
import opa from "../../assets/div.MuiAvatar-root.png";
import { FaPaperclip, FaRegHeart } from 'react-icons/fa';
import { RxLink2 } from 'react-icons/rx';
import { FaRegFaceSmile } from 'react-icons/fa6';
import maleFaceSeven from "../../assets/maleFaceSeven.png";
import femaleFaceThree from "../../assets/femaleFaceThree.png";
import { BsShare } from 'react-icons/bs';
import { CiClock2 } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import growMax from "../../assets/growMax.png";
import maleFace from "../../assets/maleFace.png"
import maleFaceFive from "../../assets/maleFaceFive.png"
import femaleFaceTwo from "../../assets/femaleFaceTwo.png"
import femaleFace6 from "../../assets/femaleFace6.png"

const SocialMediaTwo = () => {
  return (
    <div className='max-w-[1540px] w-full m-auto'>
      <div className='px-[100px] pt-[25px]'>
        <h4 className='text-[#6C737F]'>SOCIAL MEDIA</h4>
        <h1 className='font-bold text-[33px] text-[#111927] mb-[24px]'>Here's what your connections posted</h1>
        <div className='border-2 border-[#0000000A] py-[28px] px-[23px] mb-[25px]'>
                  <div className='flex gap-[15px] mb-[30px]'>
                    <div><img width={40} src={opa} alt="" /></div>
                    <div className='w-full h-[109px] border-2 border-[#0000000A] py-[15px] px-[15px]'>
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
        <div className='py-[20px] px-[23px] border-2 border-[#0000000A]'>
          <div className='flex gap-[15px] items-center mb-[20px]'>
            <img src={maleFaceSeven} alt="" />
            <div>
              <p>Siegbert Gottfried updated her status</p>
              <p className='flex items-center gap-[5px] text-[#6C737F]'><CiClock2 />35 minutes ago</p>
            </div>
          </div>
          <p className='mb-[30px]'>Hey guys! What's your favorite framework?</p>
<div className='flex justify-between mb-[25px]'>
              <p className='flex items-center gap-[5px] text-[#6C737F]'><FaRegHeart className='text-[#F04438]'/> 1</p>
              <BsShare />
              </div>
             <div className='flex items-center justify-center mb-[25px]'>
               <div className='w-full h-[3px] bg-[#F2F4F7]'></div>
             </div>
              <div className='flex  gap-[15px] mb-[44px]'>
        <div><img src={femaleFaceThree} alt="" /></div>
        <div className='w-full h-[83px] bg-[#F3F4F6] flex justify-between py-[5px] px-[5px]'>
          <div>
            <p className='font-medium text-base text-[#111927] mb-[10px]'>Fran Perez</p>
            <p className='text-sm'>Oh... so sentimental</p>
          </div>
          <p className='text-[#6C737F] text-sm w-[100px]'>2 hours ago</p>
        </div>
      </div>
      <div className='flex gap-[15px] mb-[25px]'>
        <div><img width={40} src={opa} alt="" /></div>
        <div className='w-full h-[109px] border-2 border-[#F3F4F6] py-[20px] px-[15px]'>
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
          <div className='w-full py-[20px] px-[23px] border-2 border-[#0000000A] mb-[25px]'>
                      <div className='flex gap-[15px] items-center mb-[20px]'>
                        <img width={40} src={opa} alt="" />
                        <div>
                          <p>Anika Visser updated her status</p>
                          <p className='text-[#6C737F] flex items-center gap-[5px]'><CiClock2 /> 4 hours ago</p>
                        </div>
                      </div>
                      <p className='mb-[20px]'>Just made this overview screen for a project, what-cha thinkin?</p>
                      <img className='mb-[20px]' src={growMax} alt="" />
                      <div className='flex justify-between mb-[50px]'>
                        <p className='flex items-center gap-[5px]'><FaRegHeart className='text-[#F04438]'/> 24</p>
                        <BsShare />
                        </div>
                        <div className='flex mb-[15px] gap-[15px]'>
                                <div><img src={maleFace} alt="" /></div>
                                <div className='w-full h-[83px] bg-[#F3F4F6] flex justify-between py-[15px] px-[15px]'>
                                  <div>
                                    <p className='font-medium text-sm text-[#111927] mb-[10px]'>Jie Yan Song</p>
                                    <p className='text-sm'>Could use some more statistics, but that’s me haha</p>
                                  </div>
                                  <p className='text-[#6C737F] text-xs'>3 hours ago</p>
                                </div>
                              </div>
                        <div className='flex  gap-[15px] mb-[44px]'>
                  <div><img src={maleFaceFive} alt="" /></div>
                  <div className='w-full h-[83px] bg-[#F3F4F6] flex justify-between py-[5px] px-[5px]'>
                    <div>
                      <p className='font-medium text-sm text-[#111927] mb-[10px]'>Penjani Inyene</p>
                      <p className='text-sm'>Hmm, honestly this looks nice but I would change the shadow though</p>
                    </div>
                    <p className='text-[#6C737F] text-xs w-[100px]'>2 hours ago</p>
                  </div>
                </div>
                <div className='flex gap-[15px] mb-[25px]'>
                  <div><img width={40} src={opa} alt="" /></div>
                  <div className='w-full h-[109px] bg-[#F3F4F6] py-[20px] px-[15px]'>
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
                    <div className='w-full py-[20px] px-[23px] border-2 border-[#0000000A]'>
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
                                          <div className='w-full h-[83px] bg-[#F3F4F6] flex justify-between py-[15px] px-[15px]'>
                                            <div>
                                              <p className='font-medium text-sm text-[#111927] mb-[10px]'>Iulia Albu</p>
                                              <p className='text-sm'>That’s actually deep. Thanks for the design, would you consider making an interaction?</p>
                                            </div>
                                            <p className='text-[#6C737F] text-xs'>3 hours ago</p>
                                          </div>
                                        </div>
                                  <div className='flex  gap-[15px] mb-[44px]'>
                            <div><img src={femaleFace6} alt="" /></div>
                            <div className='w-full h-[83px] bg-[#F3F4F6] flex justify-between py-[5px] px-[5px]'>
                              <div>
                                <p className='font-medium text-sm text-[#111927] mb-[10px]'>Fran Perez</p>
                                <p className='text-sm'>Oh... so sentimental</p>
                              </div>
                              <p className='text-[#6C737F] text-xs w-[100px]'>2 hours ago</p>
                            </div>
                          </div>
                          <div className='flex gap-[15px] mb-[25px]'>
                            <div><img width={40} src={opa} alt="" /></div>
                            <div className='w-full h-[109px] bg-[#F3F4F6] py-[20px] px-[15px]'>
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
    </div>
  )
}

export default SocialMediaTwo
