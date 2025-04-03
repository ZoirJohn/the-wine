import Link from 'next/link'

const Poster = ({ button, offer, content }: { button: string; offer: string; content: string }) => {
        return (
                <div className='embla__slide flex relative' key={1}>
                        <div className='grow-1 bg-[url(/poster.png)] bg-no-repeat bg-cover flex justify-end px-16'>
                                <div className='flex flex-col basis-[500px] justify-center items-center z-10'>
                                        <h1 className='font-sans font-regular capitalize opacity-75'>{offer}</h1>
                                        <h2 className='uppercase text-center w-[95%]'>{content}</h2>
                                        <Link href='/' className='mt-8 max-xs:mt-4 uppercase'>
                                                {button}
                                        </Link>
                                </div>
                        </div>
                </div>
        )
}

export default Poster
