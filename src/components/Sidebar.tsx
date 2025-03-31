'use client'
import { useState } from 'react'
import Dropdown from './ui/Dropdown'

const Sidebar = () => {
        const [isOpenFilter, setIsOpenFilter] = useState(false)
        return (
                <>
                        <aside className='relative max-w-[230px] lg:w-full max-md:w-full max-md:overflow-'>
                                <button className='clickButton py-2 px-3 mb-10 flex gap-x-2 items-center md:hidden' onClick={() => setIsOpenFilter(!isOpenFilter)}>
                                        Сортировать
                                        <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#e3e3e3'>
                                                <path d='M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z' />
                                        </svg>
                                </button>
                                {/* {isOpenFilter && ( */}
                                <div className={`absolute bottom-0  ${isOpenFilter ? 'right-0' : 'right-50'}`}>
                                        <Dropdown open={true} filterArray={['Белое', 'Красное', 'Розовое', 'Прочее']} name='Цвет' />
                                        <Dropdown open={true} filterArray={['Брют', 'Десертное', 'Крепленное', 'Нон-Дозаж', 'полусладкое', 'полусухое', 'сухое']} name='Сладость' />
                                        <Dropdown open={true} filterArray={'input'} name='Цена' />
                                </div>
                                {/* )} */}
                        </aside>
                </>
        )
}

export default Sidebar
