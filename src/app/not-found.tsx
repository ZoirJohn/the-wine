import Special from '@/components/Special'

const NotFound = () => {
        return (
                <>
                        <section>
                                <div className='_container min-h-[570px] bg-[url(/notfound.png)] pt-8 pb-16 bg-no-repeat bg-cover relative'>
                                        <span className='h-full bg-gradient-to-b to-black absolute w-full left-0 top-0 z-0'></span>
                                        <span className='absolute right-10 top-10 font-extrabold text-lg tracking-[.75rem] max-xs:top-2 max-xs:right-2'>404</span>
                                        <span className='absolute bottom-16 left-1/2 animate-bounce max-md:bottom-6'>
                                                <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#e3e3e3'>
                                                        <path d='M480-80 200-360l56-56 184 183v-647h80v647l184-184 56 57L480-80Z' />
                                                </svg>
                                        </span>
                                        <div className='max-w-[700px] flex flex-col h-118 tracking-[0.5rem] uppercase'>
                                                <h5 className='font-sans text-[82px] capitalize relative max-xs:text-5xl'>Ooooops...</h5>
                                                <p className='text-[28px] text-white relative mt-auto mb-17'>похоже, мы не можем найти нужную вам страницу</p>
                                                <p className='text-[28px] text-white relative'>загляните сюда</p>
                                        </div>
                                </div>
                        </section>
                        <Special />
                </>
        )
}

export default NotFound
