

import React from 'react'

export const Card = ({ text, parrafo = "", icono }) => {
    return (
        <>
            <div data-aos="zoom-in" data-aos-delay="100" className='w-4/5/4 h-full bg-blue-500 hover:bg-blue-400 rounded-xl px-7 py-5'>
                <div className='my-5 text-center flex justify-center md:justify-normal text-white'>
                    {icono}
                </div>
                <h1 className='montserrat-bold py-4 text-white text-medium text-center md:text-left'>
                    {text}
                </h1>

                <p className='text-sm montserrat-regular text-center md:text-left whitespace-normal mb-5 text-white '>{parrafo}</p>
            </div>
        </>
    )
}
