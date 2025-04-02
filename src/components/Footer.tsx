const Footer = () => {
        return (
                <footer>
                        <div className='_container flex flex-wrap justify-between leading-relaxed pt-17 pb-14 gap-15 max-md:flex-col max-sm:pt-10 max-sm:pb-8 max-sm:text-base'>
                                <ul>
                                        <h3 className='font-bold mb-3'>О нас</h3>
                                        <li>История</li>
                                        <li>Ценности</li>
                                        <li>Биодинамика</li>
                                </ul>
                                <ul>
                                        <h3 className='font-bold mb-3'>Магазин</h3>
                                        <li>Все вины</li>
                                        <li>Единичная коллекция</li>
                                </ul>
                                <ul>
                                        <h3 className='font-bold mb-3'>Вины</h3>
                                        <li>Эрмитаж в 3D</li>
                                        <li>Душа М. Шапутье</li>
                                </ul>
                                <ul>
                                        <h3 className='font-bold mb-3'>Винный туризм</h3>
                                        <li>Услуги и посещение дегустации вин</li>
                                        <li>Велосипедная прогулка</li>
                                </ul>
                        </div>
                </footer>
        )
}

export default Footer
