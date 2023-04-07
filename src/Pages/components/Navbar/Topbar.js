import React from 'react';
import { FaFacebook,FaLinkedin,FaInstagram,FaTwitter,FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from 'react-router-dom';
const Topbar = () => {
    return (
        <div className='md:flex justify-between bg-gray-200 py-1 border-b px-4 sm:px-10 lg:px-20 hidden font-jost overflow-hidden'>
            <div className='flex items-start'>
                <div className='flex  gap-8 items-center'>
                    <p className='text-[14px]'><span className='flex justify-center text-sky-500 text-md gap-2 items-center'><SiGmail />rukunuljoypub58@gmail.com</span></p>
                    <p className='text-[14px]'><span className='flex justify-center text-sky-500 text-md gap-2 items-center'><FaPhoneAlt/>(+880)01721345499</span></p>
                </div>
            </div>
            <div className='flex gap-4 text-lg justify-center items-center'>
                <Link><FaFacebook/></Link>
                <Link><FaLinkedin/></Link>
                <Link><FaInstagram/></Link>
                <Link><FaTwitter/></Link>
            </div>
        </div>
    );
};

export default Topbar;