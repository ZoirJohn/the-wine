import Cocktail from '@/components/ui/Cocktail'

const Cocktails = () => {
        const images = ['/cocktail1.png', '/cocktail2.png', '/cocktail3.png', '/cocktail4.png', '/cocktail5.png', '/cocktail6.png', '/cocktail7.png', '/cocktail8.png', '/cocktail9.png']
        return (
                <>
                        <section>
                                <div className='_container relative py-9 after:absolute after:content-[url(/cocktails.png)] after:top-0 after:right-0 after:opacity-10'>
                                        <h4 className='text-3xl uppercase max-w-1/4 max-md:max-w-1/2 max-xs:max-w-full'>наша карта коктейлей</h4>
                                        <div className='flex gap-40 text-mini uppercase leading-6 mt-9 max-md:flex-wrap max-md:gap-y-8'>
                                                <p>
                                                        Делимся с вами рецептами простых и популярных алкогольных коктейлей, которые не сложно приготовить в домашних условиях. Интересен как сам
                                                        процесс, так и наслаждение его результатом. для многих из них потребуются специальные "устройства", поэтому лих приготовлении лучше оставить
                                                        бармену.
                                                </p>
                                                <p>
                                                        В приготовлении в домашних условиях важно соблюдать пропорции, иметь лед (если едете на отдых, рекомендуем захватить с собой пакеты для льда).
                                                        По возможности уделите внимание выбору бокала. Часто выбор коктейля зависит от наличия алкоголя дома. Зная или имея под рукой рецепты популярных
                                                        коктейлей вы всегда сможете побаловать себя изысканным вкусом.
                                                </p>
                                        </div>
                                </div>
                        </section>
                        <section>
                                <div className='_container grid grid-cols-3 gap-2 max-md:grid-cols-2 max-xs:grid-cols-1'>
                                        {images.map((img, id) => {
                                                return <Cocktail img={img} key={id} />
                                        })}
                                </div>
                        </section>
                </>
        )
}

export default Cocktails
