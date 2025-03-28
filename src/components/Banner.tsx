import Link from 'next/link'

const Banner = () => {
        return (
                <div className='embla__slide flex relative' key={1}>
                        <div className='relative min-w-[500px] bg-[url(/offer.png)] relative after:block after:absolute after:border-t-[285px] after:border-r-[115px] after:border-t-black after:border-r-transparent after:left-full max-lg:min-w-[300px] max-lg:bg-center max-md:absolute max-md:after:hidden max-md:h-full max-md:w-full max-md:opacity-50'></div>
                        <div className='grow-1 bg-gradient-to-br from-[#7E0A2D] to-[#390213] flex justify-center'>
                                <div className='flex flex-col basis-[500px] justify-center items-center z-10'>
                                        <h1 className='font-sans font-regular'>Special offer</h1>
                                        <h2 className='uppercase text-center'>pichon longueville comtesse de lalande</h2>
                                        <Link href='/' className='mt-8 max-xs:mt-4'>
                                                ЗАКАЗАТЬ ВИНО
                                        </Link>
                                </div>
                        </div>
                </div>
        )
}

export default Banner
