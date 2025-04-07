import Link from 'next/link'
import { FC } from 'react'

const Cocktail: FC<{ img: string }> = ({ img }) => {
        return (
                <div>
                        <div className='relative after:absolute after:w-full after:h-full after:bg-black/70 after:top-0 after:left-0 after:z-[1] bg-cover bg-no-repeat' style={{ backgroundImage: `url(${img})` }}>
                                <div className='min-h-[290px] relative z-10 p-5 pb-11 flex flex-col justify-between items-center tracking-widest'>
                                        <p className='mr-auto'>20%</p>
                                        <h4 className='text-3xl text-center max-xs:text-2xl'>Aperol Spritz</h4>
                                        <Link href='/'>УЗНАТЬ БОЛЬШЕ</Link>
                                </div>
                        </div>
                </div>
        )
}

export default Cocktail
