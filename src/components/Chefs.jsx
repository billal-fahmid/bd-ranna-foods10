import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard';

const Chefs = () => { 
    const [chefs, setChefs] = useState([]);

    useEffect(()=>{
        fetch(`https://chef-hunter-assignment-12-server-billal-fahmid.vercel.app/chefs`)
        .then(res =>res.json())
        .then(data =>setChefs(data))
    },[])
    // console.log(chefs)

    return (
        <div>
            <div className='text-center'>
                <h2 className='text-[#43121d] text-4xl font-semibold mb-5'>Explore Our Chefs</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 mt-10'>
                {
                    chefs.map(chef=> <ChefCard key={chef.id} chef={chef}></ChefCard>)
                }
            </div>
        </div>
    );
};

export default Chefs;