

import React from "react";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import '../../styles/fonts.css'

export const CardsApp = ({nombre, pathImg}) => {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src={pathImg}
        width={200}
      />
      <CardFooter className="justify-center bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute  rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        {nombre === 'Auto facturacion' ? 
          <h1 className="text-center text-gray-700 montserrat-bold">{nombre}</h1>
          :
          nombre === 'NOM 035' ? 
          <h1 className="text-center text-green-600 montserrat-bold">{nombre}</h1>
          :
          <h1 className="text-center text-white montserrat-bold">{nombre}</h1>}

      </CardFooter>
    </Card>
  );
}
