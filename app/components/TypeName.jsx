
'use client'
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";


const TypeName = () => {
    const [typingStatus, setTypingStatus] = useState('Initializing');
    return (
        <TypeAnimation
                        className="mb-2 md:mb-5 text-xl md:text-3xl font-bold text-orange-500"
                            sequence={[
                                1500,
                                () => {
                                    setTypingStatus('Typing...');
                                },
                                // <p className="text-3xl text-slate-50 font-semibold">MD Shariful Islam Bhuyan</p>,
                                'MD Shariful Islam Bhuyan',
                                () => {
                                    setTypingStatus('Done Typing');
                                },
                                1000,
                                () => {
                                    setTypingStatus('Deleting...');
                                },
                                '',
                                () => {
                                    setTypingStatus('Done Deleting');
                                },
                            ]}
                            repeat={Infinity}
                        />
    );
};

export default TypeName;