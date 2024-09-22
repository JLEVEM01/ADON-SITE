

import React from 'react'
import { Card } from './Card'
import { Tecnologia, Disposiciones, Consultoria, Administracion } from './Icons/Icons'


export const FlexCard = () => {
    return (
        <>
            <div className='flex flex-row space-x-4'>
                <div className='grid grid-cols-2 gap-3'>
                    <div className='col-span-2 sm:col-span-1'>
                        <div className='flex w-full flex-col space-y-4'>
                            <Card
                                text="Tecnologia"
                                icono={<Tecnologia></Tecnologia>}
                                parrafo='Sistema web en la nube en la que podrás realiazr tu nómina y timbrado de forma rapida, sencilla y eficiente desde cualquier lugar con acceso a internet.'
                            >
                            </Card>

                            <Card
                                text="Disposiciones legales y fiscales"
                                icono={<Disposiciones></Disposiciones>}
                                parrafo='Los cálculos de nómina y cuotas obrero patrionales se realizan en base a las tablas anuales de acuerdo a las lesgilaciones vigentes en las cuales se actualizan automáticamente.'
                            >
                            </Card>

                        </div>
                    </div>
                    <div className='col-span-2 sm:col-span-1'>
                        <div className='flex w-full flex-col space-y-4'>

                            <Card
                                text="Consultoria"
                                icono={<Consultoria></Consultoria>}
                                parrafo='Sus empleados tendrán siempre el apoyo de expertos para operar o resolver dudas en la operación del sistema.'
                            >
                            </Card>

                            <Card
                                text="Administracion"
                                icono={<Administracion></Administracion>}
                                parrafo='Ahorro de tiempo y dinero realizando todos tus cálculos de nómina, finiquitos, aguinaldo, cuotas obrero patronales, bonos, cajas y fondos de ahorrro.'
                            >
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
