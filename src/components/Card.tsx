import Link from 'next/link'
import { ReactNode } from 'react'

const Card = ({ children, id }: { children?: ReactNode; id: any }) => {
        return (
                <Link href={`/product/${id}`} className='flex flex-col gap-y-5 w-full'>
                        <div className=' flex pt-13'>
                                <div className='bg-black relative w-full h-75 before:absolute before:h-10 before:w-1 before:bg-maroon before:right-0'>{children}</div>
                        </div>
                        <div className='leading-[14px] tracking-widest'>
                                <h4 className='uppercase tracking-[3px] w-1/2 mb-5'>L’ERMITE HERMITAGE</h4>
                                <p className='text-[7px]'>2009/0.75 л</p>
                                <p className='text-[7px] uppercase my-1'>франция/M.CHAPOUTIER</p>

                                <div className='grid grid-cols-2 items-end'>
                                        <p className='text-[7px] opacity-30 col-start-1'>ЦЕНА ЗА 1 ШТ</p>
                                        <p className='font-bold tracking-[3px] col-start-1'>90 000 р</p>
                                        <button className='cursor-pointer uppercase clickButton py-2 px-[18px] text-[8px] font-extrabold tracking-widest col-start-2 col-end-3 row-start-1 row-end-3'>
                                                В КОРЗИНУ
                                        </button>
                                </div>
                        </div>
                </Link>
        )
}

export default Card
