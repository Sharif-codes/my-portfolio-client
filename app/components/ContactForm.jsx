
'use client'
const ContactForm = () => {
    const handleContact = (e) => {
        e.preventDefault();
        const form = e.target;

        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const phone = form.phone.value;
        const subject = form.subject.value;
        const email = form.email.value;
        const message = form.message.value;

        const formData = { firstName, lastName, phone, subject, email, message }
        console.log("form data:", formData);

    }
    return (
        <form onSubmit={handleContact} className='grid grid-cols-2 gap-4'>
            <input type="text" name="firstName" className='bg-[#1F242D] p-2 rounded-lg outline-0' placeholder='First Name' />
            <input type="text" name="lastName" className='bg-[#1F242D] p-2 rounded-lg outline-0' placeholder='Last Name' />
            <input type="number" name="phone" className='bg-[#1F242D] p-2 rounded-lg outline-0' placeholder='Phone' />
            <input type="text" name="subject" className='bg-[#1F242D] p-2 rounded-lg outline-0' placeholder='Subject' />

            <input type="text" name="email" className='bg-[#1F242D] p-2 rounded-lg outline-0 col-span-2' placeholder='Email' />
            <textarea type="text" name="message" className='bg-[#1F242D] p-2 rounded-lg outline-0 col-span-2' placeholder='Message' />

            <input type="submit" name="" id="" placeholder='Submit' className='bg-[#1F242D] p-2 rounded-lg outline-0 col-span-2 cursor-pointer hover:bg-orange-500' />
        </form>
    );
};

export default ContactForm;