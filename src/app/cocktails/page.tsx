import Cocktail from '@/components/ui/Cocktail'

const Cocktails = () => {
        return (
                <>
                        <section>
                                <div className='_container relative py-9 after:absolute after:content-[url(/cocktails.png)] after:top-0 after:right-0 after:opacity-10'>
                                        <h4 className='text-3xl uppercase max-w-1/4'>наша карта коктейлей</h4>
                                        <div className='flex gap-40 text-mini uppercase leading-6 mt-9 '>
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
                                <div className='_container grid grid-cols-3 gap-2'>
                                        <Cocktail />
                                        <Cocktail />
                                        <Cocktail />
                                        <Cocktail />
                                        <Cocktail />
                                        <Cocktail />
                                </div>
                        </section>
                </>
        )
}

export default Cocktails
