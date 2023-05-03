import React, { useEffect, useState } from 'react';

const Testimonials = () => {

    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch(`https://chef-hunter-assignment-12-server-billal-fahmid.vercel.app/recipes`)
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    console.log(chefs[0].name)
    // const {chefPicture,description,name}

    return (
        <div>
            <h3 className='text-4xl text-white font-semibold mb-10'>Testimonials</h3>
            <div>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">

                    <div class="w-3/4 mx-auto px-4 py-7 text-gray-800 bg-white rounded-lg shadow-md">
                            <div class="mb-2 ">
                                
                                <div class="flex flex-col items-center justify-center">
                                    <div
                                        class="w-16 h-16 mb-5 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full "
                                    >
                                        <img
                                            src={chefs[0]?.chefPicture}
                                            alt="img"
                                            class="object-cover object-center w-full h-full"
                                        />
                                    </div>
                                    <p class="mb-2 text-center text-xl text-[#111]">
                                    {chefs[0]?.description}


                                </p>
                                    <h5 class="font-bold text-xl text-[#a82d49]">{chefs[0]?.name}</h5>
                                 
                                </div>
                            </div>
                        </div>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    <div id="slide2" className="carousel-item relative w-full">
                    <div class="w-3/4 mx-auto px-4 py-7 text-gray-800 bg-white rounded-lg shadow-md">
                            <div class="mb-2 ">
                                
                                <div class="flex flex-col items-center justify-center">
                                    <div
                                        class="w-16 h-16 mb-5 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full "
                                    >
                                        <img
                                            src={chefs[1]?.chefPicture}
                                            alt="img"
                                            class="object-cover object-center w-full h-full"
                                        />
                                    </div>
                                    <p class="mb-2 text-center text-xl text-[#111]">
                                    {chefs[1]?.description}


                                </p>
                                    <h5 class="font-bold text-xl text-[#a82d49]">{chefs[1]?.chefName}</h5>
                                 
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    <div id="slide3" className="carousel-item relative w-full">

                    <div class="w-3/4 mx-auto px-4 py-7 text-gray-800 bg-white rounded-lg shadow-md">
                            <div class="mb-2 ">
                                
                                <div class="flex flex-col items-center justify-center">
                                    <div
                                        class="w-16 h-16 mb-5 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full "
                                    >
                                        <img
                                            src={chefs[2]?.chefPicture}
                                            alt="img"
                                            class="object-cover object-center w-full h-full"
                                        />
                                    </div>
                                    <p class="mb-2 text-center text-xl text-[#111]">
                                    {chefs[2]?.description}


                                </p>
                                    <h5 class="font-bold text-xl text-[#a82d49]">{chefs[2]?.chefName}</h5>
                                 
                                </div>
                            </div>
                        </div>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    <div id="slide4" className="carousel-item relative w-full">

                        <div class="w-3/4 mx-auto px-4 py-7 text-gray-800 bg-white rounded-lg shadow-md">
                            <div class="mb-2 ">
                                
                                <div class="flex flex-col items-center justify-center">
                                    <div
                                        class="w-16 h-16 mb-5 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full "
                                    >
                                        <img
                                            src={chefs[3]?.chefPicture}
                                            alt="img"
                                            class="object-cover object-center w-full h-full"
                                        />
                                    </div>
                                    <p class="mb-2 text-center text-xl text-[#111]">
                                    {chefs[3]?.description}


                                </p>
                                    <h5 class="font-bold text-xl text-[#a82d49]">{chefs[3]?.chefName}</h5>
                                 
                                </div>
                            </div>
                        </div>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;