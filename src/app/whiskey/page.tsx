import Card from '@/components/Card'
import Carousel from '@/components/Carousel'
import Poster from '@/components/Poster'
import Sidebar from '@/components/Sidebar'
import Filter from '@/components/ui/Filter'
import Image from 'next/image'
import Link from 'next/link'

const Whiskey = () => {
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
                                                <div className='capitalize text-6xl font-sans mb-15 text-center'>Whiskey</div>
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
                                                        <Card
                                                                children={
                                                                        <Image
                                                                                src='/bluewine.png'
                                                                                alt='wine'
                                                                                width={133}
                                                                                height={320}
                                                                                loading='lazy'
                                                                                className='block left-1/2 -translate-x-1/2 absolute bottom-7'
                                                                        />
                                                                }
                                                        />
                                                        <Card
                                                                children={
                                                                        <Image
                                                                                src='/yellowwine.png'
                                                                                alt='wine'
                                                                                width={133}
                                                                                height={320}
                                                                                loading='lazy'
                                                                                className='block left-1/2 -translate-x-1/2 absolute bottom-7'
                                                                        />
                                                                }
                                                        />
                                                        <Card
                                                                children={
                                                                        <Image
                                                                                src='/yelwine.png'
                                                                                alt='wine'
                                                                                width={133}
                                                                                height={320}
                                                                                loading='lazy'
                                                                                className='block left-1/2 -translate-x-1/2 absolute bottom-7'
                                                                        />
                                                                }
                                                        />
                                                        <Card
                                                                children={
                                                                        <Image
                                                                                src='/yelwine.png'
                                                                                alt='wine'
                                                                                width={133}
                                                                                height={320}
                                                                                loading='lazy'
                                                                                className='block left-1/2 -translate-x-1/2 absolute bottom-7'
                                                                        />
                                                                }
                                                        />
                                                        <Card
                                                                children={
                                                                        <Image
                                                                                src='/yellowwine.png'
                                                                                alt='wine'
                                                                                width={133}
                                                                                height={320}
                                                                                loading='lazy'
                                                                                className='block left-1/2 -translate-x-1/2 absolute bottom-7'
                                                                        />
                                                                }
                                                        />
                                                        <Card
                                                                children={
                                                                        <Image
                                                                                src='/yelwine.png'
                                                                                alt='wine'
                                                                                width={133}
                                                                                height={320}
                                                                                loading='lazy'
                                                                                className='block left-1/2 -translate-x-1/2 absolute bottom-7'
                                                                        />
                                                                }
                                                        />
                                                        <Card
                                                                children={
                                                                        <Image
                                                                                src='/blackjack.png'
                                                                                alt='wine'
                                                                                width={133}
                                                                                height={320}
                                                                                loading='lazy'
                                                                                className='block left-1/2 -translate-x-1/2 absolute bottom-7'
                                                                        />
                                                                }
                                                        />
                                                        <Card
                                                                children={
                                                                        <Image
                                                                                src='/blackjack.png'
                                                                                alt='wine'
                                                                                width={133}
                                                                                height={320}
                                                                                loading='lazy'
                                                                                className='block left-1/2 -translate-x-1/2 absolute bottom-7'
                                                                        />
                                                                }
                                                        />
                                                        <Card
                                                                children={
                                                                        <Image
                                                                                src='/whiskey.png'
                                                                                alt='wine'
                                                                                width={133}
                                                                                height={320}
                                                                                loading='lazy'
                                                                                className='block left-1/2 -translate-x-1/2 absolute bottom-7'
                                                                        />
                                                                }
                                                        />
                                                        <Link href='/' className='link'>
                                                                СМОТРЕТЬ ВСЕ
                                                        </Link>
                                                </div>
                                        </div>
                                </div>
                        </section>
                        <section>
                                <div className='_container relative overflow-hidden px-0'>
                                        <div className='absolute top-75 left-130 w-20 h-[285px] bg-gradient-to-br from-[#8D082B] to-[#570707] -skew-y-60 scale-y-[2.1] max-md:hidden z-[5]'></div>
                                        <div className='min-w-[612px] bg-[url(/special.png)] bg-no-repeat bg-cover relative max-lg:min-w-[300px] max-lg:bg-center max-md:absolute max-md:after:hidden max-md:h-full max-md:w-full max-md:opacity-50'></div>
                                        <div className='min-h-[285px] flex'>
                                                <div className='basis-[600px] max-lg:basis-[400px] bg-[url(/special.png)] bg-no-repeat bg-cover max-md:absolute'></div>
                                                <div className='basis-[700px] max-lg:grow-1 bg-gradient-to-br from-[#8D082B] to-[#570707] flex justify-center'>
                                                        <div className='flex flex-col basis-[500px] justify-center items-center z-10'>
                                                                <h1 className='font-sans font-regular'>Sommelier Choice</h1>
                                                                <h2 className='uppercase text-center'>НЕ УВЕРЕНЫ В ВЫБОРЕ? МЫ ГОТОВЫ ПОМОЧЬ!</h2>
                                                                <Link href='/' className='mt-8 max-xs:mt-4 uppercase'>
                                                                        ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ
                                                                </Link>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </section>
                </>
        )
}

export default Whiskey
