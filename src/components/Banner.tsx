import Link from 'next/link'

const Banner = ({ button, offer, content }: { button: string; offer: string; content: string }) => {
        return (
                <div className='embla__slide flex relative' key={1}>
                        <div className='basis-[500px] bg-[url(/offer.png)] relative rightTriangle after:border-r-[115px] max-md:absolute'></div>
                        <div className='grow-1 bg-gradient-to-br from-[#7E0A2D] to-[#390213] flex justify-center'>
                                <div className='flex flex-col basis-[500px] justify-center items-center z-10 max-lg:basis-150'>
                                        <h1 className='font-sans font-regular capitalize opacity-75'>{offer}</h1>
                                        <h2 className='uppercase text-center'>{content}</h2>
                                        <Link href='/' className='mt-8 max-xs:mt-4 uppercase'>
                                                {button}
                                        </Link>
                                </div>
                        </div>
                </div>
        )
}

export default Banner
