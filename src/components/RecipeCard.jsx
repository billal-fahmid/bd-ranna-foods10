import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeCard = ({ recipe }) => {

    const [disable , setDisable] = useState(false)

    const notify = () => {
        setDisable(!disable)
        toast("Recipe Added Favorite")};
    console.log(recipe)
    return (
        <div>
            <div className="w-full rounded-lg shadow-md lg:max-w-sm" >

                <div className="p-4">
                    <h4 className="text-2xl mb-3 font-semibold text-[#a82d49]">

                        {recipe.name}
                    </h4>
                    <div className="text-left">
                        <span className='text-xl text-[#a82d49] font-semibold'>Cooking Method</span>
                        <p className="mb-2 leading-normal">
                            {recipe.method}
                        </p>
                        <span className='text-xl text-[#a82d49] font-semibold'>Ingredients</span>
                        <ol className='list-decimal pl-5'>
                            {
                                recipe.ingredients.map(ingre => <li>{ingre}</li>)
                            }
                        </ol>
                        <p className='flex'>Rating : {recipe.rating} <span className='ml-5'><Rating style={{ maxWidth: 100 }} value={recipe?.rating} readOnly /></span></p>
                    </div>
                    <button onClick={notify} disabled={disable} className=" bg-[#a82d49]   hover:bg-white hover:text-[#a82d49] hover:border border-[#a82d49] text-white font-bold py-2 px-6 mt-5 ">
                        Favorite
                    </button>
                    <ToastContainer></ToastContainer>
                </div>
            </div>

        </div>
    );
};

export default RecipeCard;