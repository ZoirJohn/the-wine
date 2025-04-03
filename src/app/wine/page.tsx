import Card from '@/components/Card'
import Carousel from '@/components/Carousel'
import Poster from '@/components/Poster'
import Sidebar from '@/components/Sidebar'
import Filter from '@/components/ui/Filter'
import Link from 'next/link'

const Wine = () => {
        return (
                <>
                        <section>
                                <div className='_container p-0'>
                                        <Carousel>
                                                <Poster offer='special offer' content='ПИНО НУАР: БУРГУНДИЯ VS. ЮАР' button='УЗНАТЬ БОЛЬШЕ' />
                                                <Poster offer='special offer' content='ПИНО НУАР: БУРГУНДИЯ VS. ЮАР' button='УЗНАТЬ БОЛЬШЕ' />
                                        </Carousel>
                                </div>
                        </section>
                        <section>
                                <div className='_container bg-brownie pt-18 pb-31 flex justify-between gap-x-2 max-lg:gap-x-4 max-md:flex-col max-md:items-center'>
                                        <Sidebar>
                                                <div className='capitalize text-6xl font-sans mb-15 text-center'>red wine</div>
                                        </Sidebar>
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
                                                        <Card />
                                                        <Card />
                                                        <Card />
                                                        <Card />
                                                        <Card />
                                                        <Link href='/' className='link'>
                                                                СМОТРЕТЬ ВСЕ
                                                        </Link>
                                                </div>
                                        </div>
                                </div>
                        </section>
                        <section>
                                <div className='_container relative overflow-hidden'>
                                        <div className='absolute top-75 left-133 w-20 h-[285px] bg-gradient-to-br from-[#8D082B] to-[#570707] -skew-y-60 scale-y-[2.1] max-md:hidden z-10'></div>
                                        <div className='min-h-[285px] flex relative' key={1}>
                                                <div className='basis-[600px] bg-[url(/special.png)]'></div>
                                                <div className='basis-[685px] bg-gradient-to-br from-[#8D082B] to-[#570707] flex flex-col items-center justify-center '>
                                                        <h1 className='font-sans font-regular capitalize opacity-75'>Sommelier Choice</h1>
                                                        <h2 className='uppercase text-center'>СПЕЦИАЛЬНЫЕ ЦЕНЫ ДЛЯ КОРПОРАТИВНЫХ КЛИЕНТОВ</h2>
                                                        <Link href='/' className='mt-8 max-xs:mt-4 uppercase'>
                                                                УЗНАТЬ БОЛЬШЕ
                                                        </Link>
                                                </div>
                                        </div>
                                </div>
                        </section>
                </>
        )
}

export default Wine
