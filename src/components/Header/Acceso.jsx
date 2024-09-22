

import React from 'react'

export const Acceso = ({ imagen = "", text = "", ruta = "" }) => {
    return (
        <a  href={ruta} className='text-dark '>
            <div className='flex flex-row space-x-4 items-center h-full w-full p-3'>
                <div className='flex w-full flex-col space-y-4 '>
                    <div className='m-auto'>
                        <img src={imagen} alt="" />
                    </div>
                    <div className='m-auto'>
                        <h1 class="text-center text-xs">
                            {text}
                        </h1>
                    </div>
                </div>

            </div>
            
        </a>
    )
}
