'use client'

import { useEffect, useState } from 'react'

const Dropdown = ({ open, filterArray }: { open: boolean; filterArray?: any[] }) => {
        const [isOpen, setIsOpen] = useState(false)
        useEffect(() => {
                console.log(document.getElementsByClassName('dropdown')[0].clientHeight)
        }, [])
        return (
                <div className='dropdown'>
                        <div className='flex justify-between items-center pb-[10px] mb-[10px] border-b-[1px]'>
                                ЦВЕТ
                                <a className='clickButton w-7 h-7 flex justify-center items-center' onClick={() => setIsOpen(!isOpen)}>
                                        {isOpen ? '+' : '-'}
                                </a>
                        </div>
                        {isOpen && (
                                <ul className='flex flex-col gap-y-2'>
                                        <li>
                                                <label htmlFor='' className='group border-white text-neutral-100 flex gap-x-5 items-center tracking-widest'>
                                                        <input type='checkbox' name='option' className='opacity-0 w-[18px] h-[18px] absolute z-10 cursor-pointer' />
                                                        <span className='flex items-center justify-center w-[18px] h-[18px] border-[0.5px] border-neutral-100 before:w-3 before:h-3 before:bg-neutral-100 before:hidden group-has-checked:before:block'></span>
                                                        БЕЛОЕ
                                                        <p className='text-[9px] ml-auto opacity-25'>9</p>
                                                </label>
                                        </li>
                                        <li>
                                                <label htmlFor='' className='group border-white text-neutral-100 flex gap-x-5 items-center tracking-widest'>
                                                        <input type='checkbox' name='option' className='opacity-0 w-[18px] h-[18px] absolute z-10 cursor-pointer' />
                                                        <span className='flex items-center justify-center w-[18px] h-[18px] border-[0.5px] border-neutral-100 before:w-3 before:h-3 before:bg-neutral-100 before:hidden group-has-checked:before:block'></span>
                                                        КРАСНОЕ
                                                        <p className='text-[9px] ml-auto opacity-25'>21</p>
                                                </label>
                                        </li>
                                        <li>
                                                <label htmlFor='' className='group border-white text-neutral-100 flex gap-x-5 items-center tracking-widest'>
                                                        <input type='checkbox' name='option' className='opacity-0 w-[18px] h-[18px] absolute z-10 cursor-pointer' />
                                                        <span className='flex items-center justify-center w-[18px] h-[18px] border-[0.5px] border-neutral-100 before:w-3 before:h-3 before:bg-neutral-100 before:hidden group-has-checked:before:block'></span>
                                                        РОЗОВОЕ
                                                        <p className='text-[9px] ml-auto opacity-25'>13</p>
                                                </label>
                                        </li>
                                        <li>
                                                <label htmlFor='' className='group border-white text-neutral-100 flex gap-x-5 items-center tracking-widest'>
                                                        <input type='checkbox' name='option' className='opacity-0 w-[18px] h-[18px] absolute z-10 cursor-pointer' />
                                                        <span className='flex items-center justify-center w-[18px] h-[18px] border-[0.5px] border-neutral-100 before:w-3 before:h-3 before:bg-neutral-100 before:hidden group-has-checked:before:block'></span>
                                                        ПРОЧЕЕ
                                                        <p className='text-[9px] ml-auto opacity-25'>9</p>
                                                </label>
                                        </li>
                                </ul>
                        )}
                </div>
        )
}

export default Dropdown
