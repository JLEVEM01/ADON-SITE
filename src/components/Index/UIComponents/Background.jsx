


import React from 'react'

export const Background = ({ class1, class2, class3, class4, icono }) => {
    return (
        <>
            <div className='h-full rounded-lg w-full relative group z-0 overflow-hidden'>
                <div
                    class={class1}
                >
                </div>
                <div
                    class={class2}
                >
                </div>
                <div
                    class={class3}
                >
                </div>
                <div
                    class={class4}
                >
                </div>
                {icono}
            </div>
        </>
    )
}
