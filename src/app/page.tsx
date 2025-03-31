import Card from '@/components/Card'
import Carousel from '@/components/Carousel'
import Sidebar from '@/components/Sidebar'
import Filter from '@/components/ui/Filter'

const HomePage = () => {
        return (
                <>
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
                        <section>
                                <div className='_container bg-brownie pt-18 flex justify-between gap-x-2 max-lg:gap-x-4 max-md:flex-col max-md:items-center'>
                                        <Sidebar />
                                        <div className='flex flex-col basis-[877px]'>
                                                <div className='flex flex-wrap mb-16 max-tablet-lg:mb-10 max-md:hidden '>
                                                        <Filter customStyles='mr-auto'>Бестселлеры</Filter>
                                                        <Filter sorting>цена</Filter>
                                                        <Filter customStyles='ml-10 mr-16 max-lg:mx-8'>Производитель a-z</Filter>
                                                        <Filter sorting customStyles='after:-right-2'>
                                                                винтаж
                                                        </Filter>
                                                        <div className='relative flex gap-x-5 before:block before:absolute before:w-1 before:h-1 before:bg-white before:rounded-full before:left-[40%] before:top-1/2 before:-translate-y-1/2 tablet-lg:ml-16'>
                                                                <a className='capitalize opacity-50 activeChoice'>Новинки</a>
                                                                <a className='capitalize opacity-50'>популярные</a>
                                                        </div>
                                                </div>
                                                <div className='grid grid-cols-[repeat(3,240px)] justify-between gap-y-25 gap-x-1 max-lg:grid-cols-[repeat(3,190px)] max-tablet-lg:grid-cols-[repeat(2,240px)] max-md:grid-cols-[repeat(auto-fit,220px)] max-sm:justify-around'>
                                                        <Card />
                                                        <Card />
                                                        <Card />
                                                        <Card />
                                                </div>
                                        </div>
                                </div>
                        </section>
                </>
        )
}

export default HomePage
