import Carousel from '@/components/Carousel'
import Image from 'next/image'

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
                        <section className=''>
                                <div className='_container bg-brownie pt-18'>
                                        <div className='grid grid-cols-3'>
                                                <div className='flex max-md:hidden'>
                                                        <a className='capitalize mr-auto'>Бестселлеры</a>
                                                        <a className='capitalize'>цена</a>
                                                        <a className='capitalize mx-10'>Производитель a-z</a>
                                                        <a className='capitalize'>винтаж</a>
                                                        <div className='relative flex gap-x-5 before:block before:absolute before:w-1 before:h-1 before:bg-white before:rounded-full before:left-[40%] before:top-1/2 before:-translate-y-1/2 ml-16'>
                                                                <a className='capitalize opacity-50 activeChoice'>Новинки</a>
                                                                <a className='capitalize opacity-50'>популярные</a>
                                                        </div>
                                                </div>
                                                <div className='flex flex-col gap-y-5'>
                                                        <div className='w-59 flex'>
                                                                <div className='bg-black relative w-full h-75 before:absolute before:h-10 before:w-1 before:bg-maroon before:right-0'>
                                                                        <Image
                                                                                src='/wine.png'
                                                                                alt='wine'
                                                                                width={99}
                                                                                height={349}
                                                                                loading='lazy'
                                                                                className='block left-1/2 -translate-x-1/2 absolute bottom-0'
                                                                        />
                                                                </div>
                                                        </div>
                                                        <div>
                                                                <h4 className='uppercase tracking-[3px] w-1/2 mb-5'>L’ERMITE HERMITAGE</h4>
                                                                <p>2009/0.75 л</p>
                                                                <p>франция/M.CHAPOUTIER</p>
                                                                <p>ЦЕНА ЗА 1 ШТ</p>
                                                                <p>90 000 р</p>
                                                        </div>
                                                </div>
                                        </div>
                                        <aside></aside>
                                </div>
                        </section>
                </>
        )
}

export default HomePage
