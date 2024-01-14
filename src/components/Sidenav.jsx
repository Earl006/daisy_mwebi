import React from 'react';
import { useState } from 'react';
import {AiOutlineMenu,AiOutlineHome,AiOutlineProject,AiOutlineMail} from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdReviews } from "react-icons/md";
import { BiBadgeCheck } from 'react-icons/bi';


function Sidenav() {
    const[nav,setNav]=useState(false);
    const handleNav= ()=>{
        setNav(!nav)
    };
  return (
    <div>
          <AiOutlineMenu onClick={handleNav}className=' absolute top-4 right-4 z-[99] md:hidden'style={{color:'black'}} size={30}/>
        {
            nav?(
          <div className='fixed inset-0 bg-black/90 flex flex-col justify-center items-center z-20'>
                    <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineHome size={20} />
                        <span className='pl-4'>Home</span>
                    </a>
                     <a onClick={handleNav} href="#about" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <BsPerson size={20} />
                        <span className='pl-4'>About Me</span>
                    </a>
                     <a onClick={handleNav} href="#reviews" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <MdReviews size={20} />
                        <span className='pl-4'>Reviews and Testimonials</span>
                    </a> 
                
                    <a onClick={handleNav} href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineMail size={20} />
                        <span className='pl-4'>Contact Me</span>
                    </a>   
                    <a onClick={handleNav} href="#location" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <FaMapMarkerAlt size={20} />
                        <span className='pl-4'>Find Me</span>
                    </a>  
                    <a onClick={handleNav}href='#certifications' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <BiBadgeCheck size={20}/>
                        <span> Certifications</span>
                    </a> 
                </div>
            )
            : (
                ''
            ) }
<div className='md:block hidden fixed top-[25%] z-10'>
    <div className='flex flex-col'>
        <a href='#main' className='rounded-full shadow-lg bg-black/95  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <AiOutlineHome size={20} style={{ color: 'white' }}/>
            
        </a>
        <a href='#about' className='rounded-full shadow-lg bg-black/95  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <BsPerson size={20} style={{ color: 'white' }}/>
        </a>
        <a href='#reviews' className='rounded-full shadow-lg bg-black/95  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <MdReviews size={20} style={{ color: 'white' }}/>
        </a>
        <a href='#contact' className='rounded-full shadow-lg bg-black/95  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <AiOutlineMail size={20} style={{ color: 'white' }}/>
        </a>
        <a href='#location' className='rounded-full shadow-lg bg-black/95  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <FaMapMarkerAlt size={20} style={{ color: 'white' }}/>
        </a>
        <a href="#certifications">
          <div className="rounded-full shadow-lg bg-black m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <BiBadgeCheck size={20} className="text-white" />
          </div>
        </a>
    </div>
</div>
    </div>
  );
}

export default Sidenav