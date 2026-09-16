import { AiOutlineBars } from 'react-icons/ai'
import { BsToggles } from 'react-icons/bs'
import { CiExport } from 'react-icons/ci'
import { FaBars } from 'react-icons/fa'
import { FiPaperclip } from 'react-icons/fi'
import { HiDotsHorizontal } from 'react-icons/hi'
import { RiExpandUpDownFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const BlogThree = () => {
  return (
    <div className='max-w-[1540px] w-full m-auto'>
      <div className='px-[25px] pt-[25px]'>
        <h1 className='text-[36px] font-bold'>Blog</h1>
      <p className='mb-[50px]'>Dashboard • Blog • <span className='text-[#6C737F]'>Create</span></p>
      <div className='w-[1180px] h-[72px] border-1 border-[#00000014] px-[25px] flex items-center justify-between mb-[95px]'>
        <p>Hello, Admin</p>
        <div className='flex gap-[12px] items-center'>
          <p className='font-semibold text-sm text-[#111927]'>Cancel</p>
          <Link tp={"/"}>
        <button className='w-[151px] h-[40px] rounded-[12px] bg-[#6366F1] text-white'>Publish changes</button>
        </Link>
        <HiDotsHorizontal />
        </div>
      </div>
      <div className='flex gap-[300px] mb-[80px]'>
        <h4 className='font-bold text-base text-[#111927] w-[200px]'>Basic details</h4>
        <div>
          <input className='w-[700px] h-[55px] rounded-[8px] mb-[23px] border-1 border-[#E5E7EB] indent-5' type="text" placeholder='Post title'/>
          <input className='w-[700px] h-[55px] rounded-[8px] border-1 border-[#E5E7EB] indent-5' type="text" placeholder='Short description'/>
        </div>
      </div>
      <div className='flex justify-between mb-[80px]'>
        <h4 className='font-bold text-base text-[#111927]'>Post cover</h4>
        <div>
          <div className='w-[700px] h-[230px] bg-[#30329f] flex items-end justify-end mb-[30px]'>
            <div className='w-[43px] h-[43px] rounded-[50%] bg-[#6366F1] flex items-center justify-center text-white'><BsToggles /></div>
          </div>
          <p className='mb-[30px]'>Remove photo</p>
          <div className='flex gap-[15px] items-center justify-center'>
            <div className='w-[63px] h-[63px] rounded-[50%] bg-[#E5E7EB] flex items-center justify-center'><CiExport className='text-2xl text-black'/></div>
            <div>
              <p className='font-bold text-base'><span className='underline'>Click to upload</span> or drag and drop</p>
              <p className='text-[#6C737F]'>(SVG, JPG, PNG, or gif maximum 900x400)</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-between mb-[80px]'>
        <h4 className='font-bold text-base text-[#111927]'>Content</h4>
        <div>
          <div className='w-[700px] h-[41px] flex items-center gap-[20px] bg-[#F2F4F7] pl-[15px] mb-[2px]'>
            Normal <RiExpandUpDownFill /> B I U <FiPaperclip /> <AiOutlineBars /> <FaBars /> <span>T<sub>x</sub></span>
          </div>
          <div className='w-[700px] h-[286px] bg-[#F2F4F7] py-[15px] px-[15px]'>
            <input type="text" placeholder='Write something'/>
          </div>
        </div>
      </div>
      <div className='flex gap-[300px]'>
        <h4 className='font-bold text-base text-[#111927] w-[200px]'>Meta</h4>
        <div>
          <input className='w-[700px] h-[55px] rounded-[8px] mb-[23px] border-1 border-[#E5E7EB] indent-5' type="text" placeholder='SEO title'/>
          <input className='w-[700px] h-[55px] rounded-[8px] border-1 border-[#E5E7EB] indent-5' type="text" placeholder='SEO description'/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default BlogThree
