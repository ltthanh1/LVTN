import React, { memo } from 'react'
import Slider from "react-slick";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const SliderCustom = ({ images }) => {
    return (
        <div className='w-full'>
            <Slider {...settings}>
                <div className='bg-black flex justify-center h-[320px] px-12'>
                    <img
                        src='https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/06/16/z3495868911137-69ff28e11f9be30361e7e35e63315ea8_1655343646.jpg'
                        alt='slider'
                        className='object-contain m-auto h-full'
                    />
                </div>
                <div className='bg-black flex justify-center h-[320px] px-12'>
                    <img
                        src='https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/06/16/z3495868911137-69ff28e11f9be30361e7e35e63315ea8_1655343646.jpg'
                        alt='slider'
                        className='object-contain m-auto h-full'
                    />
                </div>
                <div className='bg-black flex justify-center h-[320px] px-12'>
                    <img
                        src='https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/06/16/z3495868911137-69ff28e11f9be30361e7e35e63315ea8_1655343646.jpg'
                        alt='slider'
                        className='object-contain m-auto h-full'
                    />
                </div>
            </Slider>
        </div>
    )
}

export default memo(SliderCustom)