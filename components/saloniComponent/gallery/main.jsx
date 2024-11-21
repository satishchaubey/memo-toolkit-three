"use client";

import { useState } from "react";
import CardGallery from './cardGallery';

export default function Gallery() {
    const [images] = useState([
        "/images/Snapchat-138583995.jpg",
        "/images/IMG_20230331_130230.jpg",
        "/images/IMG-20220223-WA0021.jpg",
        "/images/IMG-20220326-WA0004.jpg",
        "/images/IMG-20220406-WA0020.jpg",
        "/images/IMG-20220413-WA0001.jpg",
        "/images/IMG-20220413-WA0012.jpg",
        "/images/IMG-20220415-WA0012.jpg",
        "/images/IMG-20220810-WA0016.jpg",
        "/images/IMG-20220810-WA0020.jpg",
        "/images/IMG-20220902-WA0044.jpg",
        "/images/IMG-20220905-WA0003.jpg",
        "/images/IMG-20221003-WA0007.jpg",
        "/images/IMG-20221009-WA0009.jpg",
        "/images/IMG-20221213-WA0018.jpg",
        "/images/IMG-20221215-WA0010.jpg",
        "/images/IMG-20221219-WA0029.jpg",
        "/images/IMG-20221219-WA0031.jpg",
        "/images/IMG-20221221-WA0052.jpg",
        "/images/IMG-20221223-WA0010.jpg",
        "/images/IMG-20221225-WA0015.jpg",
        "/images/IMG-20221230-WA0026.jpg",
        "/images/IMG-20221230-WA0033.jpg",
        "/images/IMG-20221231-WA0018.jpg",
        "/images/IMG-20230110-WA0014.jpg",
        "/images/IMG-20230111-WA0007.jpg",
        "/images/IMG-20230108-WA0003.jpg",
        "/images/IMG-20230108-WA0013.jpg",
        "/images/IMG-20230108-WA0036.jpg",
        "/images/IMG-20230109-WA0024.jpg",
        "/images/IMG-20230109-WA0025.jpg",
        "/images/IMG-20230109-WA0027.jpg",
        "/images/IMG_20220218_233945.jpg",
        "/images/IMG-20230109-WA0030.jpg",
        "/images/IMG-20230110-WA0013.jpg",
        "/images/IMG-20230111-WA0008.jpg",
        "/images/Snapchat-1739482957.jpg",
        "/images/Snapchat-469222209.jpg",
        "/images/Snapchat-675155446.jpg",
        "/images/Snapchat-278178156.jpg",
        "/images/Snapchat-1505441082.jpg",
        "/images/Snapchat-715053619.jpg",
    ]);

    return (
        <div className="bg-gray-100">
            <h1 className="text-center text-3xl p-2">Memories</h1>
            <CardGallery images={images} />
        </div>
    );
}
