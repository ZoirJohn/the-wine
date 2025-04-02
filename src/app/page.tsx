import Banner from '@/components/Banner'
import Card from '@/components/Card'
import Carousel from '@/components/Carousel'
import Sidebar from '@/components/Sidebar'
import Filter from '@/components/ui/Filter'
import Link from 'next/link'

const HomePage = () => {
        return (
                <>
                        <section>
                                <div className='_container p-0 relative'>
                                        <Carousel>{<Banner />}</Carousel>
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
                                <div className='_container pt-18 pb-31 flex justify-between gap-x-2 max-lg:gap-x-4 max-md:flex-col max-md:items-center'>
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
                                <div className='_container p-0 min-h-[285px] flex relative overflow-hidden'>
                                        <div className='min-w-[612px] bg-[url(/taster.png)] bg-no-repeat bg-cover relative max-lg:min-w-[300px] max-lg:bg-center max-md:absolute max-md:after:hidden max-md:h-full max-md:w-full max-md:opacity-50'></div>
                                        <div className='absolute top-75 left-133 w-20 h-[285px] bg-gradient-to-br from-[#331111] to-[#541C1C] -skew-y-60 scale-y-[2.1] max-md:hidden'></div>
                                        <div className='grow-1 bg-gradient-to-br from-[#331111] to-[#541C1C] flex justify-center'>
                                                <div className='flex flex-col basis-[500px] justify-center items-center z-10'>
                                                        <h1 className='font-sans font-regular'>Sommelier Choice</h1>
                                                        <h2 className='uppercase text-center'>НЕ УВЕРЕНЫ В ВЫБОРЕ? МЫ ГОТОВЫ ПОМОЧЬ!</h2>
                                                        <Link href='/' className='mt-8 max-xs:mt-4 uppercase'>
                                                                ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ
                                                        </Link>
                                                </div>
                                        </div>
                                </div>
                        </section>
                        <section>
                                <div className='_container pt-12 pb-31 grid grid-cols-2 max-md:grid-cols-1 max-md:justif gap-y-12'>
                                        <p className='basis-[486px] grow-1 pr-27 max-md:px-15 max-xs:p-0 leading-[25px]'>
                                                Благодаря рекомендациям наших опытных кавистов, вы сможете не только приобрести ту самую бутылку вина, но и узнать много нового о сочетаниях, подборе
                                                гастрономической пары, необходимости декантации, хранении и сервировке.
                                        </p>
                                        <p className='basis-[521px] grow-1 pr-20 max-md:px-15 max-xs:p-0 leading-[25px]'>
                                                Мы с удовольствием поделимся с Вами самыми главными винными секретами, а также поможем подобрать идеальные букет и вкус, соответствующие поводу, вашим
                                                предпочтениям и статусу.
                                        </p>
                                        <Link href='/' className='uppercase link justify-self-start max-md:justify-self-center'>
                                                УЗНАТЬ БОЛЬШЕ
                                        </Link>
                                </div>
                        </section>
                        <section>
                                <div className='_container flex relative min-h-[285px] justify-center'>
                                        <form className='min-h-[285px] basis-[500px] bg-black relative pt-8 pl-11 pr-16 max-xs:px-8 max-xs:p-0 rightTriangle after:border-r-[133px] flex flex-col items-start max-xs:justify-center gap-y-6 opacity-100'>
                                                <p className='uppercase font-bold tracking-[3px] text-center'>ПОДПИСАТЬСЯ НА EMAIL РАССЫЛКУ</p>
                                                <label className='flex flex-col gap-y-4 w-full'>
                                                        <span className='text-[9px] opacity-50'>EMAIL</span>
                                                        <input type='text' name='' id='' className='bg-white py-[10px]' />
                                                </label>
                                                <button className='uppercase bg-[#9D0000] py-[10px] px-[50px]'>ОТПРАВИТЬ</button>
                                        </form>
                                        <div className='grow-1 bg-[url(/shop.png)] bg-no-repeat bg-[-2rem] flex justify-center max-md:hidden'></div>
                                </div>
                        </section>
                </>
        )
}

export default HomePage
