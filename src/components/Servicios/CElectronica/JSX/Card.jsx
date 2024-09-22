

import React from 'react'

export const Card = ({ text, parrafo = "", icono }) => {
    return (
        <>
            <div data-aos="zoom-in" data-aos-delay="100" className='w-4/5/4 h-full bg-green-600 hover:bg-green-400 rounded-xl px-7 py-5'>
                <div className='my-5 text-center flex justify-center md:justify-normal text-white'>
                    {icono}
                </div>
                <h1 className='montserrat-bold py-4 text-white text-xl text-center md:text-left'>
                    {text}
                </h1>

                <p>{parrafo}</p>
            </div>
        </>
    )
}
