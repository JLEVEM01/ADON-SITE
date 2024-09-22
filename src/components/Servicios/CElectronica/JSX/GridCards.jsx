

import React from 'react'
import { Card } from './Card'
import { Libro, Auxilar, Diario, Grafico, Remplazo, OrigenRecursos, Cambio, CambioFinanciero, Efectivo, Producto, Relacion } from './Icons/Icons'

export const GridCards = () => {
    return (
        <>
            <div className='flex flex-row space-x-4'>
                <div className='grid grid-cols-2 gap-3'>
                    <div className='col-span-2 sm:col-span-1'>
                        <div className='flex w-full flex-col space-y-4'>
                            <Card
                                text="Balanza de Comprobación"
                                parrafo=''
                                icono={<Libro></Libro>}>
                            </Card>

                            <Card
                                text="Libro Mayor"
                                parrafo=''
                                icono={<Auxilar></Auxilar>}>
                            </Card>

                            <Card
                                text="Diario General"
                                parrafo=''
                                icono={<Diario></Diario>}>
                            </Card>

                            <Card
                                text="Estado de Resultados"
                                parrafo=''
                                icono={<Grafico></Grafico>}>
                            </Card>

                            <Card
                                text="Estado de cambios en la Situación Financiera"
                                parrafo=''
                                icono={<Remplazo></Remplazo>}>
                            </Card>

                            <Card
                                text="Origen y Aplicación de Recursos"
                                parrafo=''
                                icono={<OrigenRecursos></OrigenRecursos>}>
                            </Card>
                        </div>
                    </div>
                    <div className='col-span-2 sm:col-span-1'>
                        <div className='flex w-full flex-col space-y-4'>
                            <Card

                                text="Cambios en el Capital de Trabajo"
                                parrafo=''
                                icono={<Cambio></Cambio>}>
                            </Card>

                            <Card
                                text="Cambios en la Situacion Financiera"
                                parrafo=''
                                icono={<CambioFinanciero></CambioFinanciero>}>
                            </Card>

                            <Card
                                text="Estado de Flujo de Efectivo"
                                parrafo=''
                                icono={<Efectivo></Efectivo>}>
                            </Card>

                            <Card
                                text="Estado de Productos y Gastos"
                                parrafo=''
                                icono={<Producto></Producto>}>
                            </Card>

                            <Card
                                text="Relación de Gastos"
                                parrafo=''
                                icono={<Relacion></Relacion>}>
                            </Card>

                            <Card
                                text="Origen y Aplicación de Recursos"
                                parrafo=''
                                icono={<OrigenRecursos></OrigenRecursos>}>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
