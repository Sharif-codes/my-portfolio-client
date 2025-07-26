import React from 'react';
import { MdWifiCalling3 } from 'react-icons/md';
import { IoMdMail } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import ContactForm from '@/app/components/ContactForm';

const Contact = () => {
    console.log("contact page");
    return (
        <div className='mx-4 lg:mx-50'>
            <h2 className="text-3xl text-center py-8">Contact <span className="text-orange-500">Me</span></h2>

            <div className='mt-10 flex h-full w-full justify-center items-center gap-20'>
                <div className='w-1/2 space-y-10'>
                    <div>
                        <h2 className='text-orange-500 text-2xl font-semibold'>SHARIF</h2>
                    </div>
                    <div>
                        <p className='text-justify'>I am professional Web designer. I have designed more than 50 web template for my client. You can hire me for design your personal, business or other website template. You can trust me. I complied your work with your full satisfiction </p>
                    </div>
                    <div className='flex gap-16 text-2xl'>
                        <MdWifiCalling3 />
                        <IoMdMail />
                        <FaLinkedinIn />
                        <FaLocationDot />
                        <FaFacebookF />
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