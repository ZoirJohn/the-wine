'use client'
import { useState } from 'react'
import Dropdown from './ui/Dropdown'
import { useScrollLock } from '@/hooks/useScrollLock'

const Sidebar = () => {
        const [isOpenFilter, setIsOpenFilter] = useState(false)
        useScrollLock(isOpenFilter)
        return (
                <>
                        <aside className='relative max-w-[230px] lg:w-full max-md:w-full max-md:self-start'>
                                <button className='clickButton py-2 px-3 mb-10 flex gap-x-2 items-center md:hidden' onClick={() => setIsOpenFilter(!isOpenFilter)}>
                                        Сортировать
                                        <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#e3e3e3'>
                                                <path d='M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z' />
                                        </svg>
                                </button>
                                <div
                                        className={`${
                                                isOpenFilter ? 'block' : 'max-md:hidden'
                                        } z-10 w-full overflow-auto max-md:h-screen max-md:fixed max-md:top-0 max-md:left-1/2 max-md:-translate-x-1/2 max-md:p-4 max-md:pt-8`}
                                >
                                        <span
                                                onClick={() => setIsOpenFilter(false)}
                                                className='relative max-md:before:absolute max-md:before:w-4 max-md:before:h-[1px] max-md:before:bg-white max-md:before:rotate-45 max-md:after:absolute max-md:after:w-4 max-md:after:h-[1px] max-md:after:bg-white max-md:after:-rotate-45 max-md:before:-top-4 max-md:after:-top-4'
                                        ></span>
                                        <Dropdown open={true} filterArray={['Белое', 'Красное', 'Розовое', 'Прочее']} name='Цвет' />
                                        <Dropdown open={true} filterArray={['Брют', 'Десертное', 'Крепленное', 'Нон-Дозаж', 'полусладкое', 'полусухое', 'сухое']} name='Сладость' />
                                        <Dropdown open={true} filterArray={'input'} name='Цена' />
                                </div>
                        </aside>
                </>
        )
}

export default Sidebar
