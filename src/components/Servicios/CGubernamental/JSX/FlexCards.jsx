

import React from 'react'
import { Card } from './Card'
import { Adquisicion, Control, Generar, Factura, Pagos,Fijo, Contabilidad, Presupuesto, Facturacion } from './Icons/Icons'

export const GridCards = () => {
    return (
        <>
            <div className='flex flex-row space-x-4'>
                <div className='grid grid-cols-2 gap-3'>
                    <div className='col-span-2 sm:col-span-1'>
                        <div className='flex w-full flex-col space-y-4'>
                            <Card
                                text="Módulo Generación del Presupuesto"
                                parrafo='Este módulo contiene las herramientas necesarias para apoyar tanto a las áreas/coordinaciones como al departamento de finanzas, en la determinación del presupuesto.'
                                icono={<Generar></Generar>}
                            >
                            </Card>

                            <Card
                                text="Módulo Adquisiciones"
                                parrafo='Este módulo contiene la funcionalidad necesaria para el control de abastecimiento de materiales y servicios, su alcance incluye desde la solicitud de la compra hasta su colocación al proveedor. En cada parte del proceso se realiza la afectación presupuestal y la contabilización automática, acorde a la armonización contable establecida previamente por la institución.'
                                icono={<Adquisicion></Adquisicion>}
                            >
                            </Card>

                            <Card
                                text="Control de Recepciones"
                                parrafo='Este módulo permite el registro de cada bien o servicio recibido por los proveedores, mediante este módulo se verifica la existencia y vigencia de la orden de compra así como el cumplimiento de las especificaciones establecidas en esta, finalmente en este módulo se da por aceptado el bien o servicio, procediendo el sistema a efectuar los registros presupuestales y contables correspondientes.'
                                icono={<Control></Control>}
                            >
                            </Card>

                            <Card
                                text="Recepción de Facturas"
                                parrafo='Esta opción permite el control de las facturas recibidas, generando en el momento el contra recibo correspondiente.'
                                icono={<Factura></Factura>}
                            >
                            </Card>

                            <Card
                                text="Programación de Pagos"
                                parrafo='Opción que presenta los pagos a vencer en un período determinado de tiempo, así como el monto total disponible para pago. Con base en esta información, el usuario puede seleccionar el o los pagos totales o parciales a efectuar. El resultado de este proceso son los pagos a proveedores que se deben cubrir.'
                                icono={<Pagos></Pagos>}>
                                ION
                            </Card>


                        </div>
                    </div>
                    <div className='col-span-2 sm:col-span-1'>
                        <div className='flex w-full flex-col space-y-4'>

                            <Card
                                text="Activo Fijo"
                                parrafo='Este módulo tiene dos objetivos principales: el control del activo fijo financieramente alineado a los principios de la CONAC y el control físico de los activos, esto es, los responsables de los activos, solicitud de transferencias, autorizaciones etc.
                                El Módulo permite la administración y control de tipos de artículos tales como: Bienes Inmuebles, Vehículos de transporte, maquinaria y equipo, armamento, entre otros.'
                                icono={<Fijo></Fijo>}>
                            </Card>

                            <Card

                                text="Contabilidad"
                                parrafo='Este módulo contiene la funcionalidad necesaria para contabilizar de acuerdo a los lineamientos definidos por la CONAC, empleando las entidades de control definidas por la misma: CRI, COG, entre otros.'
                                icono={<Contabilidad></Contabilidad>}>
                            </Card>

                            <Card
                                text="Control Presupuestal"
                                parrafo='Este módulo contiene la funcionalidad necesaria para llevar el control presupuestal, interactúa automáticamente con los diferentes módulos para el registro de los momentos contables establecidos para cada operación de la institución.'
                                icono={<Control></Control>}
                            >
                            </Card>

                            <Card
                                text="Facturación"
                                parrafo='El Módulo de facturación, permite controlar el proceso administrativo de las ventas de productos y o servicios efectuadas por la entidad económica desde su facturación, hasta su cobro.'
                                icono={<Facturacion></Facturacion>}
                            >
                            </Card>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
