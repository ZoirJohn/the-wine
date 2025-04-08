'use client'

import { useState } from 'react'

const HeaderInfo = () => {
        const [isOpen, setIsOpen] = useState<boolean>(false)
        return (
                <>
                        <div className='flex items-center sm:hidden ml-2'>
                                <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        height='24px'
                                        viewBox='0 -960 960 960'
                                        width='24px'
                                        fill='#e3e3e3'
                                        onClick={() => setIsOpen(!isOpen)}
                                        className={`transition ${isOpen ? 'rotate-180' : ''}`}
                                >
                                        <path d='M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z' />
                                </svg>
                        </div>
                        <div
                                className={`relative before:h-3 before:w-[1px] before:bg-gray-700 before:absolute before:left-[38%] before:top-1/2 before:-translate-y-1/2 after:h-3 after:w-[1px] after:bg-gray-700 after:absolute after:right-[22%] after:top-1/2 after:-translate-y-1/2 flex gap-x-[60px] max-lg:gap-x-[30px] max-sm:flex-col max-sm:absolute max-sm:before:hidden max-sm:after:hidden max-sm:gap-y-3 max-sm:bg-[#414040] max-sm:p-2 max-sm:rounded transition-all duration-400 max-sm:right-1/10 ${
                                        isOpen ? 'max-sm:top-[100%] max-sm:opacity-100 max-sm:visible' : 'max-sm:top-[120%] max-sm:opacity-0 max-sm:invisible'
                                }`}
                        >
                                <div className='grid grid-cols-2 grid-rows-2 items-center'>
                                        <p className='smallfont'>Регистрация</p>
                                        <p className='smallfont justify-self-center'>Вход</p>
                                        <p className='col-start-1 col-end-3 text-nowrap'>Личный кабинет</p>
                                </div>
                                <div className='flex flex-col justify-between'>
                                        <p className='smallfont flex gap-x-2 items-center'>
                                                <svg width='7' height='8' viewBox='0 0 7 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                        <path
                                                                opacity='0.65'
                                                                d='M3.10775 6.52545C2.21934 6.43154 1.40302 6.02345 0.82618 5.38484C0.249337 4.74624 -0.0443179 3.92552 0.00542778 3.09098C0.0551734 2.25643 0.444551 1.47129 1.09372 0.896562C1.74289 0.321829 2.60265 0.00105067 3.49672 8.69219e-07C4.39189 -0.000608683 5.2533 0.319396 5.90388 0.894233C6.55446 1.46907 6.94477 2.25506 6.99457 3.09063C7.04438 3.92621 6.7499 4.74787 6.17167 5.38673C5.59344 6.02558 4.77539 6.43308 3.88569 6.52545V8H3.10775V6.52545ZM3.49672 5.81818C3.85428 5.81818 4.20834 5.75234 4.53869 5.62442C4.86903 5.4965 5.16919 5.309 5.42202 5.07264C5.67486 4.83627 5.87542 4.55566 6.01225 4.24683C6.14908 3.938 6.21951 3.607 6.21951 3.27273C6.21951 2.93845 6.14908 2.60745 6.01225 2.29862C5.87542 1.9898 5.67486 1.70919 5.42202 1.47282C5.16919 1.23645 4.86903 1.04896 4.53869 0.921035C4.20834 0.793114 3.85428 0.727274 3.49672 0.727274C2.77459 0.727274 2.08204 0.995455 1.57142 1.47282C1.0608 1.95019 0.773935 2.59763 0.773935 3.27273C0.773935 3.94782 1.0608 4.59527 1.57142 5.07264C2.08204 5.55 2.77459 5.81818 3.49672 5.81818Z'
                                                                fill='white'
                                                        />
                                                </svg>
                                                Вход
                                        </p>
                                        <p>063 658 32 21</p>
                                </div>
                                <div className='flex flex-col justify-between'>
                                        <p className='smallfont flex gap-x-2 items-center'>Корзина: 0</p>
                                        <p>0 р</p>
                                </div>
                        </div>
                </>
        )
}

export default HeaderInfo
