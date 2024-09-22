

import React from 'react'

export const CarouselAddendas = ({ addendas = [] }) => {
    return (
        <div className='logos group relative overflow-hidden whitespace-nowrap py-10 space-x-0 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]'>
            <div className="animate-loop-scroll space-x-24 group-hover:animation-pause inline-block w-max">
                {addendas.map(addenda =>
                    <img loading='lazy' className="mx-4 inline h-16" src={addenda.pathImg} viewBox="0 0 163 48" fill="none" xmlns="http://www.w3.org/2000/svg"></img>
                )}
            </div>
            <div className="animate-loop-scroll space-x-24 group-hover:animation-pause inline-block w-max">
                {addendas.map(addenda =>
                    <img loading='lazy' className="mx-4 inline h-16" src={addenda.pathImg} viewBox="0 0 163 48" fill="none" xmlns="http://www.w3.org/2000/svg"></img>
                )}

            </div>
        </div>
    )
}
