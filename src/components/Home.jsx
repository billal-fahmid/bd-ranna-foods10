import React from 'react';
import './Home.css'
import Chefs from './Chefs';
import Foods from './Foods';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <div className='banner-section'>
                <div className='h-[600px] w-full'>
                    <div className='text-left my-auto w-2/5'>
                        <h2 className='text-[#43121d] text-5xl font-bold pt-28'>
                            Good food choices are good investments.
                        </h2>
                        <p className='text-[#555555] pt-6'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.
                        </p>
                        <div className='pt-6'>
                            <button class="bg-[#a82d49] mr-7 hover:bg-white hover:text-[#a82d49] hover:border border-[#a82d49] text-white font-bold py-2 px-6 ">
                                Order Now
                            </button>
                            <button class="bg-transparent hover:bg-white text-black font-semibold hover:text-[#a82d49] py-2 px-6 border border-[#a82d49] hover:border-transparent ">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <div className='py-24'>
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