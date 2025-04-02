'use client'
import { useScrollLock } from '@/hooks/useScrollLock'
import Link from 'next/link'
import { useState } from 'react'

const HeaderNav = () => {
        const [isOpen, setIsOpen] = useState<boolean>(false)
        useScrollLock(isOpen)
        return (
                <>
                        <div className='flex items-center sm:hidden ml-2 absolute top-full left-1/2 -translate-y-[17px] -translate-x-[70%]' onClick={() => setIsOpen(!isOpen)}>
                                <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#e3e3e3' className='w-10 h-10'>
                                        <path d='M480-360 280-560h400L480-360Z' />
                                </svg>
                        </div>
                        <nav
                                className={`_container flex max-sm:absolute max-sm:w-full -z-10 max-sm:pt-19 max-sm:items-center max-sm:justify-center max-sm:min-h-screen top-0 overflow-auto transition-all ${
                                        isOpen ? 'max-sm:-translate-y-0' : 'max-sm:-translate-y-full'
                                }`}
                        >
                                <ul
                                        className='flex gap-x-10 gap-y-2 max-lg:gap-x-4 py-2 max-md:justify-center max-sm:items-center max-sm:flex-col max-sm:gap-0 max-sm:text-base'
                                        onClick={() => setIsOpen(false)}
                                >
                                        <li>
                                                <Link className='max-sm:py-2 block' href='wine'>
                                                        Вино
                                                </Link>
                                        </li>
                                        <li>
                                                <Link className='max-sm:py-2 block' href='sparkling'>
                                                        Игристое
                                                </Link>
                                        </li>
                                        <li>
                                                <Link className='max-sm:py-2 block' href='whiskey'>
                                                        Виски
                                                </Link>
                                        </li>
                                        <li>
                                                <Link className='max-sm:py-2 block' href='cognac'>
                                                        Коньяк
                                                </Link>
                                        </li>
                                        <li>
                                                <Link className='max-sm:py-2 block' href='armagnac'>
                                                        Арманьяк
                                                </Link>
                                        </li>
                                        <li>
                                                <Link className='max-sm:py-2 block' href='rum'>
                                                        Ром
                                                </Link>
                                        </li>
                                        <li>
                                                <Link className='max-sm:py-2 block' href='vodka'>
                                                        Водка
                                                </Link>
                                        </li>
                                        <li>
                                                <Link className='max-sm:py-2 block' href='liquor'>
                                                        Ликер
                                                </Link>
                                        </li>
                                        <li>
                                                <Link className='max-sm:py-2 block' href='coctails'>
                                                        Коктейли
                                                </Link>
                                        </li>
                                        <li>
                                                <Link className='max-sm:py-2 block' href='delicacies'>
                                                        Деликатесы
                                                </Link>
                                        </li>
                                </ul>
                        </nav>
                </>
        )
}

export default HeaderNav
