

import React from 'react'
import ShineBorder from '../../MagicUI/ShineBorder'
import { BorderBeam } from '../../MagicUI/BorderBearm'

export const CardApp = ({ Nombre, Imagen, Caracteristicas = [], url }) => {
    return (
        <>

                <div data-aos="zoom-in" className="rounded-3xl bg-gray-100  p-7 h-full w-72 shadow-2xl" >
                    <div className="bg-gray-100 mx-auto shadow-lg  border-5 border-gray-300 rounded-full z-20 h-36 w-36 -mt-28">
                        <img className="rounded-full h-36 w-36" src={Imagen} alt="" width={100} />
                        

                    </div>
                    <div class="mt-5">
                        <h1 className="montserrat-bold text-center text-xl">{Nombre}</h1>
                        <div className="flex flex-wrap justify-center my-3">

                            {Caracteristicas.map(dato =>
                                <div className="mb-5">
                                    <span className="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">{dato}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mt-2 flex justify-center" >
                        <a href={url} className="border-2 border-red-500 text-red-500 hover:bg-red-500 montserrat-bold text-lg mx-auto m-0 text-center hover:text-white  py-2 px-7 rounded-lg">Ingresar</a>
                    </div>

                </div>


        </>
    )
}
