"use client"

import React from "react";
import Slider from "react-slick";

const CardGallery = ({ images }) => {
    const settings = {
        dots: false, // Show dots for navigation
        infinite: true, // Infinite scrolling
        speed: 10, // Transition speed
        slidesToShow: 1, // Show 1 image at a time
        slidesToScroll: 1, // Scroll 1 image at a time
        autoplay: true, // Enable autoplay
        autoplaySpeed: 5000, // Time between automatic slide transitions
        arrows: false, // Show next/prev arrows
    };

    return (
        <div className="w-full min-h-96">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div className="relative rounded-lg shadow-lg overflow-hidden" key={index}>
                        <img
                            src={image}
                            alt={`Image ${index + 1}`}
                            className=" object-cover"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CardGallery;
