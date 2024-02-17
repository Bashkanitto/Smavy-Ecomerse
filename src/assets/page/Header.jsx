import React from 'react';
import '../../index.css';
import '../../../node_modules/tailwindcss';

function Header() {
  return (
    <header className='bg-gray-800 text-white p-4'>  
        <h1 className='text-2x1 font-bold'>Smavy</h1>
            <nav>
                <ul>
                    <li><a href='/'/>Home</li>
                    <li><a href='/about_us'/>About Us</li>
                    <li><a href='/contact'/>Contact</li>
                </ul>
            </nav>
    </header>
  )
}

export default Header