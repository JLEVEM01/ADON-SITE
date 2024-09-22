
import { image } from '@nextui-org/react'
import React from 'react'

export const Card = ({ text, imagen }) => {
    return (
        <>
            <div data-aos="zoom-in" data-aos-delay="100" className='w-4/5/4 h-full bg-gray-100 hover:bg-yellow-300 rounded-xl px-7 py-5'>
                <div className='my-5 text-center flex justify-center md:justify-center text-white'>
                    <img src={imagen} alt="" />
                </div>
                {/* <h1 className='montserrat-bold py-4 text-white text-xl text-center md:text-left'>
                    {text}
                </h1> */}
            </div>
        </>
    )
}
