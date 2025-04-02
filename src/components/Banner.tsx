import Link from 'next/link'

const Banner = () => {
        return (
                <div className='embla__slide flex relative' key={1}>
                        <div className='relative min-w-[500px] bg-[url(/offer.png)] relative rightTriangle after:border-r-[115px]'></div>
                        <div className='grow-1 bg-gradient-to-br from-[#7E0A2D] to-[#390213] flex justify-center'>
                                <div className='flex flex-col basis-[500px] justify-center items-center z-10'>
                                        <h1 className='font-sans font-regular'>Special offer</h1>
                                        <h2 className='uppercase text-center'>pichon longueville comtesse de lalande</h2>
                                        <Link href='/' className='mt-8 max-xs:mt-4 '>
                                                ЗАКАЗАТЬ ВИНО
                                        </Link>
                                </div>
                        </div>
                </div>
        )
}

export default Banner
