const DropdownInput = () => {
        return (
                <div className='max-w-57 flex items-stretch justify-center'>
                        <input type='number' name='' id='' className='max-w-[62px] border-[0.5px] border-r-none text-[9px] py-[6px] px-3 tracking-widest focus:outline-0' placeholder='ОТ' />
                        <input type='number' name='' id='' className='max-w-[90px] border-[0.5px] border-r-none text-[9px] py-[6px] px-3 tracking-widest focus:outline-0' placeholder='ДО' />
                        <button className='clickButton px-[25px] leading-4 tracking-widest cursor-pointer'>ok</button>
                </div>
        )
}

export default DropdownInput
