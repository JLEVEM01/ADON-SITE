

import React from "react";
import { Card, CardBody } from "@nextui-org/react";

export const CardDetalle = ({ infoDetalle }) => {
    return (
        <Card  className="bg-gray-100/30  backdrop-blur-3xl">
            <CardBody>
                <ul role="list" class="space-y-4 styleFontP text-white mx-8 my-5 dark:text-gray-400">
                    {infoDetalle.map(detalle =>
                        <li class="flex flex-col space-y-1 rtl:space-y-reverse items-start">
                            <div class="flex items-center space-x-2 rtl:space-x-reverse">
                                <svg class="flex-shrink-0 w-3.5 h-3.5 text-white dark:text-emerald-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="leading-tight montserrat-bold">{detalle.Titulo}</span>
                            </div>
                            <p class="leading-tight montserrat-regular ">{detalle.Text}</p>
                        </li>)}

                </ul>
            </CardBody>
        </Card>
    )
}
