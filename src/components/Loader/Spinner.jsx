

import React from 'react'

export const Spinner = () => {
    return (

        <div className="flex-col gap-4 w-full flex items-center h-[100vh] justify-center">
            <div className="w-28 h-28 border-8 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-red-500 rounded-full">

            </div>
        </div>

    )
}
