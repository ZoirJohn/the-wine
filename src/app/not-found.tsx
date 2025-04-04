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
                        <section>
                                <div className='_container flex min-h-45 gap-1 mt-1 text-center max-md:flex-wrap max-md:min-h-60 text-nowrap px-0'>
                                        <div className='p-5 relative flex-1 basis-1/3 flex flex-col items-center justify-center bg-[url(/02.png)] bg-no-repeat bg-cover before:block before:w-full before:h-full before:bg-black before:opacity-50 before:absolute before:top-0 before:left-0 hover:before:opacity-25 cursor-pointer before:transition-all before:duration-500'>
                                                <p className='uppercase z-0'>ЧТО ДЕЛАЕТ НАС ОСОБЕННЫМИ?</p>
                                                <h3 className='uppercase z-0'>БЕСЕДА С СОМЕЛЬЕ</h3>
                                        </div>
                                        <div className='p-5 relative flex-1 basis-1/3 flex flex-col items-center justify-center bg-[url(/03.png)] bg-no-repeat bg-cover before:block before:w-full before:h-full before:bg-black before:opacity-50 before:absolute before:top-0 before:left-0 hover:before:opacity-25 cursor-pointer before:transition-all before:duration-500'>
                                                <p className='uppercase z-0'>С ИНТЕРЕСНЫМИ ИНГРЕДИЕНТАМИ</p>
                                                <h3 className='uppercase z-0'>ФИРМЕННЫЕ КОКТЕЙЛИ</h3>
                                        </div>
                                </div>
                        </section>
                </>
        )
}

export default NotFound
