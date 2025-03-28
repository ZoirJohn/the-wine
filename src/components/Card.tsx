import Image from 'next/image'

const Card = () => {
        return (
                <div className='flex flex-col gap-y-5 w-full'>
                        <div className=' flex pt-13'>
                                <div className='bg-black relative w-full h-75 before:absolute before:h-10 before:w-1 before:bg-maroon before:right-0'>
                                        <Image src='/wine.png' alt='wine' width={99} height={349} loading='lazy' className='block left-1/2 -translate-x-1/2 absolute bottom-0' />
                                </div>
                        </div>
                        <div className='leading-[14px] tracking-widest'>
                                <h4 className='uppercase tracking-[3px] w-1/2 mb-5'>L’ERMITE HERMITAGE</h4>
                                <p className='text-[7px]'>2009/0.75 л</p>
                                <p className='text-[7px] uppercase my-1'>франция/M.CHAPOUTIER</p>
                                <p className='text-[7px] opacity-30'>ЦЕНА ЗА 1 ШТ</p>
                                <p className='font-bold tracking-[3px]'>90 000 р</p>
                        </div>
                </div>
        )
}

export default Card
