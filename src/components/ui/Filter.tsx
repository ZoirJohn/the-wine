'use client'
import { ReactNode, useState } from 'react'

const Filter = ({ children, customStyles, sorting }: { children: ReactNode; customStyles?: string; sorting?: boolean }) => {
        const [rotate, setRotate] = useState(false)
        return (
                <a className={`flex items-center gap-x-1 relative capitalize arrow ${rotate ? 'after:-rotate-180' : ''} ${customStyles}`} onClick={() => setRotate(!rotate)}>
                        {children}
                        {sorting && (
                                <svg xmlns='http://www.w3.org/2000/svg' height='16px' viewBox='0 -960 960 960' width='16px' fill='#e3e3e3'>
                                        <path d='M320-440v-287L217-624l-57-56 200-200 200 200-57 56-103-103v287h-80ZM600-80 400-280l57-56 103 103v-287h80v287l103-103 57 56L600-80Z' />
                                </svg>
                        )}
                </a>
        )
}

export default Filter
