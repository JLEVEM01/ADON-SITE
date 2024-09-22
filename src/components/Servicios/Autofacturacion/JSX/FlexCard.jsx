

import React from 'react'
import { Card } from './Card'
import { Primario, Retencion, Vehiculos, Desperdicios, Servidumbre, Obras, CFDI } from './Icons/Icons'

export const FlexCard = () => {
    return (
        <>
            <div className='flex flex-row space-x-4'>
                <div className='grid grid-cols-2 gap-3'>
                    <div className='col-span-2 sm:col-span-1'>
                        <div className='flex w-full flex-col space-y-4'>
                            <Card
                                text="Comprobación de erogaciones en la compra de productos del sector primario."
                                icono={<Primario></Primario>}

                            >
                            </Card>

                            <Card
                                text="Comprobación de erogaciones y retenciones en el otorgamiento del uso o goce temporal de inmuebles."
                                icono={<Retencion></Retencion>}

                            >
                            </Card>

                            <Card
                                text="Comprobación de erogaciones en la compra de vehículos usados."
                                icono={<Vehiculos></Vehiculos>}

                            >
                            </Card>

                            <Card
                                text="Comprobación de erogaciones y retenciones en la recolección de desperdicios y materiales de la industria del reciclaje."
                                icono={<Desperdicios></Desperdicios>}

                            >
                            </Card>


                        </div>
                    </div>
                    <div className='col-span-2 sm:col-span-1'>
                        <div className='flex w-full flex-col space-y-4'>

                            <Card
                                text="Comprobación de erogaciones por el pago de servidumbres de paso."
                                icono={<Servidumbre></Servidumbre>}

                            >
                            </Card>

                            <Card
                                text="Comprobación de erogaciones en la compra de obras de artes plásticas y antigüedades."
                                icono={<Obras></Obras>}

                            >
                            </Card>
                            <Card

                                text="De los prestadores de servicios de generación de CFDI del Sistema Producto."
                                icono={<CFDI></CFDI>}

                            >
                            </Card>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
