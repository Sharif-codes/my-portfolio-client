
'use client'
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";


const TypeName = () => {
    const [typingStatus, setTypingStatus] = useState('Initializing');
    return (
        <TypeAnimation
            className="mb-2 md:mb-5  font-bold text-orange-500"
            sequence={[
                200,
                () => {
                    setTypingStatus('Typing...');
                },
                // <p className="text-3xl text-slate-50 font-semibold">MD Shariful Islam Bhuyan</p>,
                'Web Developer',
                () => {
                    setTypingStatus('Done Typing');
                },
                100,
                () => {
                    setTypingStatus('Deleting...');
                },

                () => {
                    setTypingStatus('Done Deleting');
                },
                500,
                () => {
                    setTypingStatus('Typing...');
                },
                'React Developer',
                () => {
                    setTypingStatus('Done Typing');
                },
                100,
                () => {
                    setTypingStatus('Deleting...');
                },

                () => {
                    setTypingStatus('Done Deleting');
                },
                500,
                () => {
                    setTypingStatus('Typing...');
                },
                'Frontend Developer',
                () => {
                    setTypingStatus('Done Typing');
                },
                100,
                () => {
                    setTypingStatus('Deleting...');
                },

                () => {
                    setTypingStatus('Done Deleting');
                },
            ]}
            repeat={Infinity}
        />
    );
};

export default TypeName;