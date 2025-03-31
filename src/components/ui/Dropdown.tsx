'use client'
import { useState } from 'react'
import DropdownFilter from './DropdownFilter'
import DropdownInput from './DropdownInput'

const Dropdown = ({ open, filterArray, name }: { open: boolean; filterArray: string[] | 'input'; name: string }) => {
        const [isOpen, setIsOpen] = useState(open)
        return (
                <div className={`dropdown ${isOpen ? 'mb-18' : 'mb-4'}`}>
                        <div className='flex justify-between items-center pb-[10px] mb-[10px] border-b-[1px]'>
                                {name}
                                <a className='clickButton w-7 h-7 flex justify-center items-center text-xl' onClick={() => setIsOpen(!isOpen)}>
                                        {isOpen ? '-' : '+'}
                                </a>
                        </div>
                        {filterArray === 'input' ? isOpen && <DropdownInput /> : isOpen && <DropdownFilter filterArray={filterArray} />}
                </div>
        )
}

export default Dropdown
