import React from 'react';
import './Header.css';


function Header() {
  return (
    <div className="header-class ">
      <header className='bg-white text-black p-5 flex w-full items-center justify-between top-0 fixed flex-wrap'>  
        <a href="/header"><h1 className='text-2xl font-bold ml-5 text-black'>Smavy</h1></a>
          <nav>
            <ul className='flex space-x-10 mr-5'>
              <li><a href='/' className='hover:text-gray-500 hover:underline text-black'>Home</a></li>
              <li><a href='/about_us' className='hover:text-gray-500 hover:underline text-black'>About Us</a></li>
              <li><a href='/contact' className='hover:text-gray-500 hover:underline text-black'>Contact</a></li>
            </ul>
          </nav>
      </header>
    </div>
  )
}

export default Header