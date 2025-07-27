import React from 'react';
import { MdWifiCalling3 } from 'react-icons/md';
import { IoMdMail } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import ContactForm from '@/app/components/ContactForm';

const Contact = () => {

    return (
        <div className='mx-4 lg:mx-50'>
            <h2 className="text-3xl text-center py-8">Contact <span className="text-orange-500">Me</span></h2>

            <div className='mt-10 flex h-full w-full justify-center items-center gap-20'>
                <div className='w-1/2 space-y-10'>
                    <div>
                        <h2 className='text-orange-500 text-2xl font-semibold'>SHARIF</h2>
                    </div>
                    <div>
                        <p className='text-justify'>I'm a fresh CSE graduate having strong affection to web developement with strong skills in HTML,CSS, JavaScript, Tailwind, React, ExpressJS,MongoDB etc. I have been enhancing my skills by continuously learning new technologies and developing projects by my own for last two years. Looking forward to develop my career as a full-stack web developer. </p>
                    </div>
                    <div className='flex gap-12 text-2xl'>
                        <MdWifiCalling3 className='cursor-pointer' />
                        <IoMdMail className='cursor-pointer' />
                        <FaLinkedinIn className='cursor-pointer' />
                        <FaLocationDot className='cursor-pointer' />
                        <FaFacebookF className='cursor-pointer' />
                    </div>
                </div>
                <div className='w-1/2'>
                    <ContactForm></ContactForm>
                </div>

                

            </div>
        </div>
    );
};

export default Contact;