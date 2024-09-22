
import { Button } from '@nextui-org/react'
import React from 'react'

export const ButtonC = ({text, icon, color}) => {
    return (
        <Button radius="sm" className='montserrat-bold text-white' color={color} endContent={icon}>
            {text}
        </Button>
    )
}
