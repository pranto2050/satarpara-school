
import log from '../Img/Logo.png'


export default function Header() {
    return (
      <div className=''>
        <header className='flex justify-between items-center px-[100px] mt-[10px] bg-slate-300 sticky w-[100%]'>
          <div className="logo">
            <img className='h-[100px]' src={log} alt="" />
          </div>
          <nav className=''>
            <ul className='md:flex gap-[20px]'>
              <li><a className='hover:bg-green-600 p-[10px] rounded-md' href="#home">প্রথম পাতা</a></li>
              <li><a className='hover:bg-green-600 p-[10px] rounded-md' href="#home">শিক্ষক ও কর্মচারী</a></li>
              <li><a className='hover:bg-green-600 p-[10px] rounded-md' href="#home">শিক্ষার্থী</a></li>
              <li><a className='hover:bg-green-600 p-[10px] rounded-md' href="#home">ফটো গ্যালারী</a></li>
              <li><a className='hover:bg-green-600 p-[10px] rounded-md' href="#home">রুটিন</a></li>
              <li><a className='hover:bg-green-600 p-[10px] rounded-md' href="#home">ফলাফল</a></li>
              <li><a className='hover:bg-green-600 p-[10px] rounded-md' href="#home">নোটিশ বোর্ড</a></li>
              <li><a className='hover:bg-green-600 p-[10px] rounded-md' href="#home">যোগাযোগ</a></li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }