
'use client'

import toast from "react-hot-toast";

const ContactForm = () => {

    const handleContact = async (e) => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const name = firstName + lastName;
        const phone = form.phone.value;
        const subject = form.subject.value;
        const email = form.email.value;
        const message = form.message.value;

        const res = await fetch("/api/sendEmail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                subject,
                name,
                email,
                phone,
                message,
            }),
        });

        const data = await res.json();
        console.log("mail result: ", data);
        toast.success("email sent successfully!")
        form.reset();
    }
    return (
        <form onSubmit={handleContact} className='grid grid-cols-2 gap-1.5 md:gap-4 text-xs md:text-md'>
            <input type="text" name="firstName" className='bg-base-300 p-2 rounded-lg outline-0' placeholder='First Name' required />
            <input type="text" name="lastName" className='bg-base-300 p-2 rounded-lg outline-0' placeholder='Last Name' required />
            <input type="number" name="phone" className='bg-base-300 p-2 rounded-lg outline-0' placeholder='Phone' required />
            <input type="text" name="subject" className='bg-base-300 p-2 rounded-lg outline-0' placeholder='Subject' />
            <input type="email" name="email" className='bg-base-300 p-2 rounded-lg outline-0 col-span-2' placeholder='Email' required />
            <textarea type="text" name="message" className='bg-base-300 p-2 rounded-lg outline-0 col-span-2' placeholder='Message' required />

            <input type="submit" name="" id="" placeholder='Send' className='bg-base-300 p-2 rounded-lg outline-0 col-span-2 cursor-pointer hover:bg-orange-500' />
        </form>
    );
};

export default ContactForm;