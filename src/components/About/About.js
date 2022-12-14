import React from 'react';
import Skills from '../Skills/Skills';
import './About.css'

const About = () => {
    return (
        <div>
        <div className='bg-gray-300 sm:relative'>
            <img className='sm:w-[30%] sm:h-[40%] w-[100%] h-[50%] ' src="myPic.jpg" alt="" />
            <div className='portfolio-content'>
            
            <h4 className='hidden font-serif sm:inline-block sm:font-bold sm:absolute sm:top-[35%] sm:left-[30%] lg:left-[50%] sm:text-4xl sm:border-transparent sm:p-2 sm:text-white'>Personal Portfolio Template</h4>
            <h5 className='hidden font-serif sm:inline-block font-bold sm:absolute sm:top-[35%]  sm:left-[30%] lg:left-[50%] sm:text-4xl sm:border-transparent sm:p-2 sm:text-red-600'>Personal Portfolio Template</h5>

            <h1 className='hidden sm:inline-block font-serif absolute font-bold top-[10%] sm:left-[31%] lg:left-[50%] text-3xl text-white'>Welcome To</h1>
            <h2 className='hidden sm:inline-block absolute font-serif font-bold top-[20%]   sm:left-[35%] lg:left-[55%] text-3xl text-white'><span className='text-red-500'>H</span>asan's <span className='underLine'>World</span></h2>
            </div>
        </div>
        <Skills></Skills>
        </div>
    );
};

export default About;