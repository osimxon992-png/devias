import { Link } from 'react-router-dom'
import teamImg from "../../assets/teamImg.png"
import maleFace from "../../assets/maleFace.png"
import yellowGlass from "../../assets/yellowGlass.png"
import maleFaceTwo from "../../assets/maleFaceTwo.png"
import { BsToggles } from 'react-icons/bs'
import mountain from "../../assets/mountain.png"
import maleFaceThree from "../../assets/maleFaceThree.png"
import grow from "../../assets/grow.png"
import femaleFace from "../../assets/femaleFace.png"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import email from "../../assets/email.png"
import volume from "../../assets/volume.png"

const BlogOne = () => {
  return (
    <div className='max-w-[1540px] w-full m-auto'>
      <div className='px-[25px] pt-[25px]'>
        <h1 className='text-[36px] font-bold'>Blog</h1>
      <p className='mb-[50px]'>Dashboard • Blog • <span className='text-[#6C737F]'>List</span></p>
      <div className='w-[1180px] h-[72px] border-1 border-[#00000014] px-[25px] flex items-center justify-between mb-[50px]'>
        <p>Hello, Admin</p>
        <Link tp={"/"}>
        <button className='w-[104px] h-[40px] rounded-[12px] bg-[#6366F1] text-white'>New Post</button>
        </Link>
      </div>
      <h1 className='text-[36px] font-bold'>Recent Articles</h1>
      <p className='font-normal text-base text-[#6C737F] w-[695px] mb-[20px]'>Discover the latest news, tips and user research insights from Acme.
You will learn about web infrastructure, design systems and devops APIs best practices.</p>
<div className='flex justify-between flex-wrap gap-[7px] mb-[45px]'>
  <div className='border-1 border-[#00000014] rounded-tr-[15px] rounded-tl-[15px]'>
    <img width={590} src={teamImg} alt="" className='mb-[30px] rounded-tr-[15px] rounded-tl-[15px]'/>
    <div className='px-[10px] mb-[10px]'>
    <div className='w-[107px] h-[32px] bg-[#1119271F] rounded-[16px] flex items-center justify-center mb-[15px]'>Programming</div>
    <h3 className='font-bold text-[23px]'>Why I Still Lisp, and You Should Too</h3>
    <p className='font-normal text-base text-[#6C737F] w-[500px] mb-[20px]'>Aliquam dapibus elementum nulla at malesuada. Ut mi nisl, aliquet non mollis vel,
feugiat non nibh.</p>
<div className='flex items-center justify-between'>
  <div className='flex items-center gap-[10px]'>
    <img src={maleFace} alt="" />
    <p>By Jie Yan Song • Feb 1, 2024</p>
    </div>
    <p className='text-[#6C737F]'>5 min read</p>
    </div>
</div>
  </div>
 <div className='border-1 border-[#00000014] rounded-tr-[15px] rounded-tl-[15px]'>
    <img width={590} src={yellowGlass} alt="" className='mb-[30px] rounded-tr-[15px] rounded-tl-[15px]'/>
    <div className='px-[10px] mb-[10px]'>
    <div className='flex items-center justify-between'>
      <div className='w-[107px] h-[32px] bg-[#1119271F] rounded-[16px] flex items-center justify-center'>Productivity</div>
    <div className='w-[43px] h-[43px] rounded-[50%] bg-[#6366F1] flex items-center justify-center text-white'><BsToggles /></div>
    </div>
    <h3 className='font-bold text-[23px]'>Scrum Has Hit the Glass Ceiling</h3>
    <p className='font-normal text-base text-[#6C737F] w-[500px] mb-[20px]'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
himenaeos.</p>
<div className='flex items-center justify-between'>
  <div className='flex items-center gap-[10px]'>
    <img src={maleFaceTwo} alt="" />
    <p>By Omar Darobe • Feb 1, 2024</p>
    </div>
    <p className='text-[#6C737F]'>6 min read</p>
    </div>
</div>
  </div>
  <div className='border-1 border-[#00000014] rounded-tr-[15px] rounded-tl-[15px]'>
    <img width={590} src={mountain} alt="" className='mb-[30px] rounded-tr-[15px] rounded-tl-[15px]'/>
    <div className='px-[10px] mb-[10px]'>
    <div className='w-[107px] h-[32px] bg-[#1119271F] rounded-[16px] flex items-center justify-center mb-[15px]'>Entrepreneurs</div>
    <h3 className='font-bold text-[23px] w-[500px]'>How Model View Controller (MVC) Architectures Work</h3>
    <p className='font-normal text-base text-[#6C737F] w-[500px] mb-[20px]'>Praesent eget leo mauris. Morbi ac vulputate nibh. In hac habitasse platea
dictumst.</p>
<div className='flex items-center justify-between'>
  <div className='flex items-center gap-[10px]'>
    <img src={maleFaceThree} alt="" />
    <p>By Siegbert Gottfried • Jan 31, 2024</p>
    </div>
    <p className='text-[#6C737F]'>3 min read</p>
    </div>
</div>
  </div>
  <div className='border-1 border-[#00000014] rounded-tr-[15px] rounded-tl-[15px]'>
    <img width={590} src={grow} alt="" className='mb-[30px] rounded-tr-[15px] rounded-tl-[15px]'/>
    <div className='px-[10px] mb-[10px]'>
    <div className='w-[107px] h-[32px] bg-[#1119271F] rounded-[16px] flex items-center justify-center mb-[15px]'>Innovation</div>
    <h3 className='font-bold text-[23px] w-[500px]'>Generating Passive Income Is Hard, Here Is a Better Option</h3>
    <p className='font-normal text-base text-[#6C737F] w-[500px] mb-[20px]'>Phasellus eu commodo lacus, eget tristique nunc. Ut ullamcorper semper nunc
sit amet vehicula.</p>
<div className='flex items-center justify-between'>
  <div className='flex items-center gap-[10px]'>
    <img src={femaleFace} alt="" />
    <p>By Iulia Albu • Jan 27, 2024</p>
    </div>
    <p className='text-[#6C737F]'>1 min read</p>
    </div>
</div>
  </div>
</div>
<div className='flex items-center justify-center gap-[20px] mb-[77px]'>
  <p className='text-[#11192761] flex items-center gap-[5px]'><FaArrowLeft /> Newer</p>
  <p className='text-[#6366F1] flex items-center gap-[5px]'>Older posts <FaArrowRight /></p>
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
</div>
      </div>
    </div>
  )
}

export default BlogOne
