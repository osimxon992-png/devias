import { Link } from 'react-router-dom'
import maleFace from "../../assets/maleFace.png"
import maleFaceFour from "../../assets/maleFaceFour.png"
import room from "../../assets/room.png"
import { FaAngleRight, FaPaperclip } from 'react-icons/fa'
import opa from "../../assets/div.MuiAvatar-root.png";
import { GrGallery } from 'react-icons/gr'
import { FaRegFaceSmile } from 'react-icons/fa6'
import email from "../../assets/email.png"
import volume from "../../assets/volume.png"
import { BsToggles } from 'react-icons/bs'

const BlogTwo = () => {
  return (
    <div className='max-w-[1540px] w-full m-auto'>
      <div className='px-[25px] pt-[25px]'>
        <h1 className='text-[36px] font-bold'>Blog</h1>
      <p className='mb-[50px]'>Dashboard • Blog • <span className='text-[#6C737F]'>Details</span></p>
      <div className='w-[1180px] h-[72px] border-1 border-[#00000014] px-[25px] flex items-center justify-between mb-[50px]'>
        <p>Hello, Admin</p>
        <Link tp={"/"}>
        <button className='w-[104px] h-[40px] rounded-[12px] bg-[#6366F1] text-white'>New Post</button>
        </Link>
      </div>
      <div className='w-[107px] h-[32px] bg-[#1119271F] rounded-[16px] flex items-center justify-center mb-[22px]'>Programming</div>
      <h1 className='text-[36px] font-bold'>Why I Still Lisp, and You Should Too</h1>
      <p className='text-[#6C737F] mb-[26px]'>Aliquam dapibus elementum nulla at malesuada. Ut mi nisl, aliquet non mollis vel, feugiat non nibh.</p>
      <div className='flex items-center gap-[10px] mb-[27px]'>
<img src={maleFace} alt="" />
<div>
  <p>By Jie Yan Song • February 1, 2024</p>
  <p className='text-[#6C737F]'>5 min read</p>
</div>
      </div>
      <img src={room} alt="" className='mb-[40px]'/>
      <div className='px-[100px] mb-[91px]'>
    <p className='font-bold text-[#111927] text-[20px] mb-[26px]'>Cras at molestie lacus. Phasellus feugiat leo quis sem iaculis, sed mattis nibh accumsan.</p>
    <p className='mb-[19px]'>Phasellus ullamcorper ultrices ullamcorper. Nunc auctor porttitor ex, non consequat ipsum aliquam at. Duis dapibus dolor in nisi viverra, a elementum
nulla viverra. Etiam feugiat turpis leo, nec finibus diam rhoncus ac. Sed at metus et orci consequat facilisis vel vel diam.</p>
<p className='font-bold text-[#111927] text-[20px] mb-[26px]'>Cras at molestie lacus. Phasellus feugiat leo quis sem iaculis, sed mattis nibh accumsan.</p>
<p className='mb-[21px]'>Etiam faucibus massa auctor gravida finibus. Cras nulla magna, dapibus sit amet accumsan nec, ullamcorper sit amet dolor.</p>
<p className='mb-[18px]'>Donec leo nisi, porta et gravida nec, tincidunt ac velit. Aliquam in turpis a quam tempus dapibus. Morbi in tellus tempor, hendrerit mi vel, aliquet tellus.
Quisque vel interdum ante. Nunc quis purus sem. Donec at risus lacinia ipsum cursus condimentum at ac dui. Nulla bibendum feugiat tellus ac tristique.
Proin auctor, lectus et accumsan varius, justo odio vulputate neque, et efficitur augue leo id ex. Aliquam eget turpis nisl. Nam sapien massa, sollicitudin
et vehicula a, fringilla vitae purus. Praesent a vestibulum felis.</p>
<div className='w-[950px] h-[90px] bg-[#1C2536] py-[10px] px-[15px] mb-[18px]'>
  <p className='text-[#6272A4] mb-[24px]'>// This is a comment</p>
  <p className='flex items-center text-white gap-[10px]'><span className='text-[#8BE9FD]'>const</span> <span className='text-[#F1FA8C]'>x</span> = () =<FaAngleRight /> [ ];</p>
</div>
<p className='mb-[21px]'>Class aptent taciti sociosqu ad litora torquent <span className='text-[#6366F1]'>const d = 3;</span>  per conubia nostra, per inceptos himenaeos. Morbi maximus metus eget nulla malesuada, sit amet luctus est fringilla. Aenean imperdiet rhoncus justo, ut pharetra lorem gravida placerat. Duis et enim lorem. Aliquam placerat elit est, vitae
fermentum ipsum finibus sed. Donec dapibus magna non tortor commodo rhoncus. Suspendisse luctus tincidunt eros, aliquet pellentesque neque
venenatis quis. Aliquam auctor felis nec orci ornare gravida. Fusce ac neque sit amet nibh scelerisque molestie. Nullam in lorem viverra, aliquam nunc
vel, interdum orci. Fusce mattis est neque, et tincidunt justo blandit quis. Etiam tincidunt purus in libero semper, vitae placerat dui vehicula. Pellentesque
sit amet imperdiet purus, quis lacinia eros.</p>
<p className='mb-[19px]'>Duis placerat turpis non metus dapibus sagittis. Vestibulum ex massa, tempus pulvinar varius at, placerat non justo. Ut tristique nisl sed porta pulvinar.
Nunc ex nibh, tempor eget elit vel, fringilla ornare risus. Praesent vel lacus finibus, laoreet nulla quis, semper tellus. Interdum et malesuada fames ac
ante ipsum primis in faucibus. Donec volutpat quis dui ac varius. Suspendisse potenti. Maecenas sagittis lacus vitae ex rhoncus, eu fringilla urna luctus.</p>
<p className='font-bold text-[#111927] text-[20px] mb-[26px]'>Donec vel erat augue. Aenean ut nisl cursus nulla tempus ultricies vel eget lorem.</p>
<p>Suspendisse pharetra dolor in massa molestie, vel molestie nunc accumsan. Cras varius aliquet pellentesque. Curabitur ac mi fermentum nibh congue
pharetra in eu nunc. Vivamus mattis urna a fringilla facilisis. Cras finibus nulla in nulla imperdiet pharetra. Morbi vel tortor turpis.</p>
      </div>
      <div className='flex mb-[15px] gap-[15px]'>
        <div><img src={maleFaceFour} alt="" /></div>
        <div className='w-[1100px] h-[83px] bg-[#F3F4F6] flex justify-between py-[15px] px-[15px]'>
          <div>
            <p className='font-medium text-sm text-[#111927] mb-[10px]'>Alcides Antonio</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <p className='text-[#6C737F]'>about 2 hours ago</p>
        </div>
      </div>
      <div className='flex  gap-[15px] mb-[44px]'>
        <div><img src={maleFace} alt="" /></div>
        <div className='w-[1100px] h-[83px] bg-[#F3F4F6] flex justify-between py-[15px] px-[15px]'>
          <div>
            <p className='font-medium text-sm text-[#111927] mb-[10px]'>Jie Yan Song</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <p className='text-[#6C737F]'>about 8 hours ago</p>
        </div>
      </div>
      <div className='flex gap-[15px] mb-[25px]'>
        <div><img width={40} src={opa} alt="" /></div>
        <div className='w-[1100px] h-[109px] bg-[#F3F4F6] py-[20px] px-[15px]'>
          <input type="text" placeholder='Add a comment'/>
        </div>
      </div>
      <div className='flex items-center justify-between mb-[64px]'>
        <div className='text-[#6C737F] flex gap-[26px] pl-[55px]'>
          <GrGallery />
          <FaPaperclip />
          <FaRegFaceSmile />
        </div>
        <Link to={"/"}>
        <button className='w-[74px] h-[40px] bg-[#6366F1] rounded-[12px] text-white mr-[35px]'>Send</button>
        </Link>
      </div>
      <div className='w-[1180px] h-[373px] py-[80px] px-[64px] border-1 border-[#00000014] flex gap-[100px]'>
        <div>
          <h1 className='font-bold text-[33px] mb-[10px]'>Join the developer list</h1>
          <p className='text-[#6C737F] mb-[30px]'>Subscribe to our newsletter to make sure you don't miss anything.</p>
          <div className='w-[555px] h-[55px] px-[15px] flex justify-between border-1 border-[#E5E7EB] mb-[15px]'>
            <input type="email" placeholder='Email address'/>
            <img src={email} alt="" />
          </div>
          <Link to={"/"}>
          <button className='w-[555px] h-[48px] rounded-[12px] bg-[#6366F1] text-white'>Subscribe</button>
          </Link>
        </div>
        <img src={volume} alt="" />
         <div className='w-[43px] h-[43px] rounded-[50%] bg-[#6366F1] flex items-center justify-center text-white'><BsToggles /></div>
      </div>
      </div>
    </div>
  )
}

export default BlogTwo
