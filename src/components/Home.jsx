import React from 'react';
import './Home.css'
import Chefs from './Chefs';
import Foods from './Foods';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <div className='banner-section'>
                <div className='lg:h-[600px] w-full'>
                    <div className='text-left my-auto w-2/5'>
                        <h2 className='text-[#43121d] text-3xl md:text-5xl font-bold pt-28'>
                            Good food choices are good investments.
                        </h2>
                        <p className='text-[#555555] pt-6'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.
                        </p>
                        <div className='pt-6'>
                            <button className="bg-[#a82d49] lg:mr-7 mb-4  hover:bg-white hover:text-[#a82d49] hover:border border-[#a82d49] text-white font-bold md:py-2 px-6 ">
                                Order Now
                            </button>
                            <button className="bg-transparent hover:bg-white text-black font-semibold hover:text-[#a82d49] md:py-2 px-6 border border-[#a82d49] hover:border-transparent ">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <div className=''>
                <Chefs></Chefs>
            </div>
            <div className='py-24'>
                <Foods></Foods>
            </div>
            <div className='py-24 bg-[#a82d49]'>
                <Testimonials></Testimonials>
            </div>
        </div>
    );
};

export default Home;