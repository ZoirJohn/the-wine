import Carousel from '@/components/Carousel'

const HomePage = () => {
        return (
                <section>
                        <div className='_container p-0 bg-brownie relative'>
                                <Carousel />
                                <div className='flex min-h-30 gap-1 text-center max-md:flex-wrap max-md:min-h-60 text-nowrap'>
                                        <div className='p-5 relative flex-1 basis-1/3 flex flex-col items-center justify-center bg-[url(/01.png)] bg-no-repeat bg-cover before:block before:w-full before:h-full before:bg-black before:opacity-50 before:absolute before:top-0 before:left-0 hover:before:opacity-25 cursor-pointer before:transition-all before:duration-500'>
                                                <p className='uppercase z-0'>НА ТЕРРИТОРИИ БОРДО</p>
                                                <h3 className='uppercase z-0'>БРЕНДИРОВАНИЕ ВИН</h3>
                                        </div>
                                        <div className='p-5 relative flex-1 basis-1/3 flex flex-col items-center justify-center bg-[url(/02.png)] bg-no-repeat bg-cover before:block before:w-full before:h-full before:bg-black before:opacity-50 before:absolute before:top-0 before:left-0 hover:before:opacity-25 cursor-pointer before:transition-all before:duration-500'>
                                                <p className='uppercase z-0'>ЧТО ДЕЛАЕТ НАС ОСОБЕННЫМИ?</p>
                                                <h3 className='uppercase z-0'>БЕСЕДА С СОМЕЛЬЕ</h3>
                                        </div>
                                        <div className='p-5 relative flex-1 basis-1/3 flex flex-col items-center justify-center bg-[url(/03.png)] bg-no-repeat bg-cover before:block before:w-full before:h-full before:bg-black before:opacity-50 before:absolute before:top-0 before:left-0 hover:before:opacity-25 cursor-pointer before:transition-all before:duration-500'>
                                                <p className='uppercase z-0'>С ИНТЕРЕСНЫМИ ИНГРЕДИЕНТАМИ</p>
                                                <h3 className='uppercase z-0'>ФИРМЕННЫЕ КОКТЕЙЛИ</h3>
                                        </div>
                                </div>
                        </div>
                </section>
        )
}

export default HomePage
