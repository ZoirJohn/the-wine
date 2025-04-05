const DropdownFilter = ({ filterArray }: { filterArray: string[] }) => {
        return (
                <ul className='flex flex-col gap-y-2'>
                        {filterArray.map((filter, id) => {
                                return (
                                        <li key={id}>
                                                <label htmlFor='option' className='group border-white text-neutral-100 flex gap-x-5 items-center tracking-widest capitalize'>
                                                        <input type='checkbox' name='option' className='opacity-0 w-[18px] h-[18px] absolute z-10 cursor-pointer' />
                                                        <span className='flex items-center justify-center w-[18px] h-[18px] border-[0.5px] border-neutral-100 before:w-3 before:h-3 before:bg-neutral-100 before:hidden group-has-checked:before:block'></span>
                                                        {filter}
                                                        <p className='text-mini ml-auto opacity-25'>9</p>
                                                </label>
                                        </li>
                                )
                        })}
                </ul>
        )
}

export default DropdownFilter
