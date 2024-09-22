

import React from 'react'
import { Card } from './Card'
import { Configurar, Enviar, Diseño,Cancelar, Certificado, Infinito, Valido, Soporte, Almacenamiento, Addenda, Reporte, Asesoría, Catalogo } from './Icons/Icons'

export const FlexCard = () => {
    return (
        <>
            <div className='flex flex-row space-x-4'>
                <div className='grid grid-cols-2 gap-3'>
                    <div className='col-span-2 sm:col-span-1'>
                        <div className='flex w-full flex-col space-y-4'>
                            <Card
                                text="Especificación de RFC a configurar"
                                icono={<Configurar></Configurar>}
                            >
                            </Card>

                            <Card
                                text="Diseño a Color"
                                icono={<Diseño></Diseño>}
                                

                            >
                            </Card>

                            <Card
                                text="Certificado del Sello Digital del RFC a utilizar"
                                icono={<Certificado></Certificado>}
                            >
                            </Card>

                            <Card
                                text="Validación de los CFDI"
                                icono={<Valido></Valido>}
                            >
                            </Card>
                            
                            <Card
                                text="Almacenamiento de los CFDI"
                                icono={<Almacenamiento></Almacenamiento>}

                            >
                            </Card>
                            
                            <Card
                                text="Reporte de Excel"
                                icono={<Reporte></Reporte>}

                            >
                            </Card>


                        </div>
                    </div>
                    <div className='col-span-2 sm:col-span-1'>
                        <div className='flex w-full flex-col space-y-4'>

                            <Card
                                text="Envío de las Facturas en Automático"
                                icono={<Enviar></Enviar>}
                            >
                            </Card>

                            <Card
                                text="Cancelación de Facturación ante el SAT"
                                icono={<Cancelar></Cancelar>}
                            >
                            </Card>
                            <Card

                                text="Sin límite de Usuarios"
                                icono={<Infinito></Infinito>}
                            >
                            </Card>

                            <Card

                                text="Soporte técnico las 24 horas de Lun - Dom"
                                icono={<Soporte></Soporte>}


                            >
                            </Card>

                            <Card

                                text="Addenda"
                                icono={<Addenda></Addenda>}
                            >
                            </Card>

                            <Card

                                text="Catálogo de Productos"
                                icono={<Catalogo></Catalogo>}


                            >
                            </Card>

                            <Card

                                text="Asesoría Fiscal"
                                icono={<Asesoría></Asesoría>}


                            >
                            </Card>

                            


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
