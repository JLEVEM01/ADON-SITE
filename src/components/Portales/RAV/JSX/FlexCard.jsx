

import React from 'react'
import { Card } from './Card'
import { Nube, Gestions, Consulta, Moduloes } from './Icons/Icons'

export const FlexCard = () => {
    return (
        <>
            <div className='flex flex-row space-x-4'>
                <div className='grid grid-cols-2 gap-3'>
                    <div className='col-span-2 sm:col-span-1'>
                        <div className='flex w-full flex-col space-y-4'>
                            <Card
                                text="ADON RAV"
                                icono={<Nube></Nube>}
                                parrafo='Es una almacén en la nube para recibir las facturas enviadas a su empresa y vaidar que son auténticas y no contengan errores. De esta forma se cumplen las obligaciones fiscales de conservación y comprobación que recaen en los contribuyentes.'
                            >
                            </Card>

                            <Card
                                text="GESTIÓN DE FACTURAS"
                                icono={<Gestions></Gestions>}
                                parrafo='Las empresas pueden consultar el reporte de las facturas recibidas de cualquier proveedor durante un mes determinado.
                                Para cada factura puede revisar su último resultado y validación, o volvera a validar.'
                            >
                            </Card>

                        </div>
                    </div>
                    <div className='col-span-2 sm:col-span-1'>
                        <div className='flex w-full flex-col space-y-4'>

                            <Card
                                text="Consulta de facturas"
                                icono={<Consulta></Consulta>}
                                parrafo='Cada factura puede ser consultada en sus formatos XML y PDF original, asi como tambien en formatos HTML flexibles y adaptables. Además, la información de las facturas puede ser exportada para su uso en otros sistemas o conectarse con cualquier ERP.'
                            >
                            </Card>

                            <Card
                                text="Modulos adicionales"
                                icono={<Moduloes></Moduloes>}
                                parrafo='Gestión de proveedores: Puede capturar información estra que requiera sobre sus proveedores ademas de verificarlos con la lista de incumplimientos del SAT. Gestión de pagos: Puede capturar información adicional sobre la aprobacion y pago de cada factura, asi como insertar o validad ADENDAS.'
                            >
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
