
'use client';
import Image from 'next/image';

import { useSearchParams } from 'next/navigation';
const ProjectDetails = () => {
    const searchParams = useSearchParams();
    const data= searchParams.get("data")


    console.log("from search params:", data);
    return (
        <div className='h-screen'>
            <div className='flex h-full w-full  border flex-col items-center justify-center'>
                
            </div>
        </div>
    );
};

export default ProjectDetails;