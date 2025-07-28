import React from 'react';
import { MdWifiCalling3 } from 'react-icons/md';
import { IoMdMail } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import ContactForm from '@/app/components/ContactForm';
import Link from 'next/link';

const Contact = () => {

    return (
        <div className='mx-4 lg:mx-50 py-5 lg:py-0'>
            <h2 className="text-xl lg:text-3xl text-center py-4 lg:py-8">Contact <span className="text-orange-500">Me</span></h2>

            <div className='mt-2 md:mt-10 flex h-full w-full justify-center items-center gap-20'>
                <div className='w-1/2 hidden md:flex md:flex-col space-y-10'>
                    <div>
                        <h2 className='text-orange-500 text-2xl font-semibold'>SHARIF</h2>
                    </div>
                    <div>
                        <p className='text-justify'>I'm a fresh CSE graduate having strong affection to web developement with strong skills in HTML,CSS, JavaScript, Tailwind, React, ExpressJS,MongoDB etc. I have been enhancing my skills by continuously learning new technologies and developing projects by my own for last two years. Looking forward to develop my career as a full-stack web developer. </p>
                    </div>
                    <div className='flex gap-12 text-2xl'>
                        <Link href="tel:+8801777456044"> <MdWifiCalling3 className='cursor-pointer' /></Link>
                        <Link href={`mailto:sharifxenjia@gmail.com?subject=Hello%20Sharif&body=I%20want%20to%20connect%20with%20you.`}><IoMdMail className='cursor-pointer' /></Link>
                        <Link href={`https://www.linkedin.com/in/sharif-bhuyan`}><FaLinkedinIn className='cursor-pointer' /></Link>
                        <Link href="https://www.google.com/maps?q=Kasba+Brahmanbaria+Bangladesh"
                            target="_blank"
                            rel="noopener noreferrer" ><FaLocationDot className='cursor-pointer' /></Link>
                        <Link href={`https://www.facebook.com/bangladeshi.tiger.77`}> <FaFacebookF className='cursor-pointer' /></Link>
                    </div>
                </div>


                <div className='w-full md:w-1/2'>
                    <ContactForm></ContactForm>
                </div>



            </div>
        </div>
    );
};

export default Contact;