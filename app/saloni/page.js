import HomeComp from '@/components/saloniComponent/homeComp/page'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Saloni = () => {
    return (
        <div className='m-4 sm:my-10 md:my-10 text-black text-center ' >
            <h1 className=" text-2xl sm:text-xl md:text-3xl text-transparent bg-clip-text animate-bounce-color-change rounded-xl p-3">
                💙 bihari 💙
            </h1>
            <HomeComp />
        </div>
    )
}

export default Saloni
