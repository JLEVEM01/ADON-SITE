
import { Card } from './Card'
import { addendasC1, addendasC2 } from '../../../../Data/Addendas/dataAddendas'

export const FlexCards = () => {
    return (
        <>
            <div className='flex flex-row space-x-4'>
                <div className='grid grid-cols-2 gap-3'>
                    <div className='col-span-2 sm:col-span-1'>
                        <div className='flex w-full flex-col space-y-4'>
                            {addendasC1.map(addenda =>
                                <Card
                                    text={addenda.empresa}
                                    imagen={addenda.pathImg}>
                                </Card>
                            )}


                        </div>
                    </div>
                    <div className='col-span-2 sm:col-span-1'>
                        <div className='flex w-full flex-col space-y-4'>
                            {addendasC2.map(addenda =>
                                <Card
                                    text={addenda.empresa}
                                    imagen={addenda.pathImg}>
                                </Card>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
