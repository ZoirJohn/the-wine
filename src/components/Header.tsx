import Image from 'next/image'
import Link from 'next/link'
import HeaderInfo from './HeaderInfo'
import HeaderNav from './HeaderNav'

const Header = () => {
        return (
                <header className='relative z-10'>
                        <div className='_container tracking-[3.15px] text-[7px] font-regular text-center py-2 relative z-10 bg-black'>
                                ДОСТУПНА СРОЧНАЯ ДОСТАВКА ПО МОСКВЕ -
                                <Link href='/' className='font-semibold underline'>
                                        ДЕТАЛЬНЫЕ УСЛОВИЯ
                                </Link>
                        </div>
                        <div className='_container flex sm:justify-between items-center md:py-[15px] py-2 bg-dark relative'>
                                <Link href='profile' className='flex items-center gap-x-[10px]'>
                                        <Image src='/icon.png' alt='logo' width={24} height={24} className='block' />
                                        <Image src='/word.png' alt='logo' width={183} height={28} className='max-lg:w-40 max-md:hidden block' />
                                </Link>
                                <form className='relative flex min-w-140 max-xl:min-w-60 items-stretch max-sm:ml-auto max-xs:min-w-56'>
                                        <input type='search' className='bg-white w-full' />
                                        <button className='inline-block bg-maroon p-3'>
                                                <svg className='w-3 h-3' xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#e3e3e3'>
                                                        <path d='M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z' />
                                                </svg>
                                        </button>
                                </form>
                                <HeaderInfo />
                        </div>
                        <HeaderNav />
                </header>
        )
}

export default Header
