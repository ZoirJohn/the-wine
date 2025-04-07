import Link from 'next/link'

const Cocktail = () => {
        return (
                <div>
                        <div className='bg-[url(/cocktail1.png)] bg-cover relative after:absolute after:w-full after:h-full after:bg-black/70 after:top-0 after:left-0 after:z-[1]'>
                                <div className='min-h-[290px] relative z-10 p-5 pb-11 flex flex-col justify-between items-center tracking-widest'>
                                        <p className='mr-auto'>20%</p>
                                        <h2>Aperol Spritz</h2>
                                        <Link href='/'>УЗНАТЬ БОЛЬШЕ</Link>
                                </div>
                        </div>
                </div>
        )
}

export default Cocktail
