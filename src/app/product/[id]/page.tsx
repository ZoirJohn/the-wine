import Card from '@/components/Card'
import CardCarousel from '@/components/CardCarousel'
import Special from '@/components/Special'
import Image from 'next/image'

const Product = async ({ params }: { params: Promise<{ id: number }> }) => {
        return (
                <>
                        <section>
                                <div className='_container flex gap-28 pt-7 max-xl:gap-8 max-lg:gap-4 max-md:gap-y-16 max-md:flex-col'>
                                        <div className='relative shrink-0 basis-[450px] flex justify-center items-start after:absolute after:max-w-[450px] after:w-full after:min-h-100 after:bg-black after:top-24 max-lg:basis-[350px]'>
                                                <Image src='/big.png' alt='image' width={140} height={480} className='z-[1]' />
                                        </div>
                                        <div>
                                                <div className='flex flex-wrap justify-between items-end tracking-[0.1rem] uppercase relative mb-9 after:absolute after:max-w-80 after:h-[1px] after:bg-gray-600 after:-bottom-4 after:w-full max-lg:justify-start max-xs:gap-y-4'>
                                                        <h5 className='text-3xl basis-2/5 max-lg:basis-1/2'>CHATEAU HAUT-BRION</h5>
                                                        <h5 className='flex items-end flex-col text-3xl basis-1/3 max-lg:basis-1/2'>
                                                                <span className='text-mini opacity-35 mr-15'>ЦЕНА ЗА 1 ШТ</span>
                                                                90 000 р
                                                        </h5>
                                                </div>
                                                <div className='tracking-[0.1rem] flex justify-between items-center uppercase max-xs:flex-col max-xs:items-start max-xs:gap-y-8'>
                                                        <div className='text-mini'>
                                                                <p className='mb-3'>2009/0.75 л</p>
                                                                <p className='flex gap-x-6 max-lg:gap-x-3'>
                                                                        <Image src='/france.svg' width={29} height={12} alt='france' />
                                                                        франция/HAUT-BRION
                                                                </p>
                                                        </div>
                                                        <form className='flex justify-between'>
                                                                <input
                                                                        type='text'
                                                                        placeholder='1'
                                                                        className='w-18 h-12 bg-white placeholder:text-gray-600 text-black text-center focus:outline-0 max-lg:w-14'
                                                                />
                                                                <button className='clickButton px-9 py-3 text-sm max-lg:px-6'>В КОРЗИНУ</button>
                                                        </form>
                                                </div>
                                                <div className='uppercase grid grid-cols-[155px_155px_145px] gap-5 justify-between mt-31 mb-25 max-xl:mt-20 max-xl:mb-16 max-xl:grid-cols-[140px_110px_140px] max-lg:grid-cols-[140px_110px_130px] max-lg:gap-x-1 max-xs:grid-cols-[140px_140px]'>
                                                        <div>
                                                                <p className='text-mini opacity-50 tracking-widest mb-2 uppercase'>ГЕОГРАФИЯ:</p>
                                                                <p>Франция - Бордо - Пессак-Леоньян</p>
                                                        </div>
                                                        <div>
                                                                <p className='text-mini opacity-50 tracking-widest mb-2 uppercase'>КЛАССИФИКАЦИЯ:</p>
                                                                <p>1-er gcc</p>
                                                        </div>
                                                        <div>
                                                                <p className='text-mini opacity-50 tracking-widest mb-2 uppercase'>СОРТОВОЙ СОСТАВ:</p>
                                                                <p>Каберне Фран Каберне Совин. Мерло Пти Вердо</p>
                                                        </div>
                                                        <div>
                                                                <p className='text-mini opacity-50 tracking-widest mb-2 uppercase'>КРЕПОСТЬ:</p>
                                                                <p>14,5%</p>
                                                        </div>
                                                        <div>
                                                                <p className='text-mini opacity-50 tracking-widest mb-2 uppercase'>САХАР:</p>
                                                                <p>0,1 г/л</p>
                                                        </div>
                                                        <div className='col-start-1 col-end-2 max-xs:col-start-2 max-xs:col-end-3'>
                                                                <p className='text-mini opacity-50 tracking-widest mb-2 uppercase'>ИМПОРТЕР:</p>
                                                                <p>SIMPLE WINE</p>
                                                        </div>
                                                        <div>
                                                                <p className='text-mini opacity-50 tracking-widest mb-2 uppercase'>РЕЙТИНГ:</p>
                                                                <p>rp 95</p>
                                                        </div>
                                                        <div className='flex flex-wrap gap-3'>
                                                                <Image src='/leaf.svg' alt='leaf' width={45} height={23} />
                                                                <Image src='/leaf.svg' alt='leaf' width={45} height={23} />
                                                                <Image src='/leaf.svg' alt='leaf' width={45} height={23} />
                                                        </div>
                                                </div>
                                                <div className='mb-20 after:absolute after:max-w-80 after:h-[1px] after:bg-gray-600 after:-bottom-8 after:w-full relative'>
                                                        <p className='text-mini opacity-50 tracking-widest mb-2 uppercase'>цвет, вкус, аромат:</p>
                                                        <h6>
                                                                Chateau Haut-Brion – относится к великим винам современности. Производимое с 1533 года, оно в какой-то степени может считаться «отцом
                                                                всех Премьер Крю Классе». Это самое старое Гран Крю Бордо, создатель нового стиля вин в 17 веке. Изюминка Haut-Brion – чрезвычайная
                                                                щедрость и концентрация, подобная ароматическая настойчивость присуща лишь самым благородным винам. Букет сдержанный, раскрывается
                                                                неспешно и изящно тонами ягод – ежевики, слив, шелковицы и смородины, сменяясь минеральными, древесными, пряными и копчеными нотками.
                                                                Вкус столь же замечательно многослойный, величественный, богат танинами, однако полон изящества и утонченности. Начиная со средины
                                                                дегустации, мощность вина раскрывается полностью, кульминируя в исключительно длительном послевкусии. Перед нами истинный шедевр, Wine
                                                                Advocate оценил вино в 100 баллов. Рекомендуется пить в период 2020-2054 года.
                                                        </h6>
                                                </div>
                                                <div className='mb-20 after:absolute after:max-w-80 after:h-[1px] after:bg-gray-600 after:-bottom-8 after:w-full relative'>
                                                        <p className='text-mini opacity-50 tracking-widest mb-2 uppercase'>Легенда:</p>
                                                        <h6>
                                                                Виноградник Шато находится в коммуне Пессак-Леоньян, и является частью одноименного апелласьона, расположенного на севере
                                                                винодельческого региона Грав в Бордо. Терруар сформированный двумя крупными гравийными грядами гюнцского периода (гюнцом называется
                                                                ледниковая эпоха первого четвертичного периода), выдается на 12-15 метров над уровнем дна соседних водоемов. Гравием называется галечник
                                                                небольшого размера, сформированный различными разновидностями кварца: для Шато О-Брион этот галечник является настоящим драгоценным
                                                                камнем. Две речушки – Пегю на севере и Серпан на юге – ограничивают эту обширную гравийную террасу под названием О-Брион, которая
                                                                упоминается на старинных картах региона и в нотариальных актах уже с начала 15 века. Подпочва терруара – суглинок. Площадь виноградника
                                                                – 51 гектара. 48 из них засажены сортами красного винограда (Мерло, Каберне Совиньон, Каберне Фран и Пти Вердо) и около 3 – сортами
                                                                белого винограда (Семильон и Совиньон Блан). Поместье Шато О-Брион было основано Жаном де Понтаком, и производило вина уже с 1533 года,
                                                                что делает его старейшим хозяйством региона Бордо. Красное вино Шато О-Брион воплощает в себе пятивековую традицию виноделия и является
                                                                неотъемлемой частью мировой истории вина. В 1660 году вино Haut Brion, под его сегодняшним названием, подавалось к столу короля Англии
                                                                Карла Второго, что по всей видимости делает О-БРИОН старейшим элитным брендом во всем мире. Благодаря применению, еще в те далекие
                                                                времена, новых способов производства и выдержки, это вино стало великим предшественником всех нынешних красных вин предназначенных для
                                                                длительного хранения. В 1855 году о-брион было возведено в ранг Премьер Крю Классе красных вин Жиронды. Только три других бордоских вина
                                                                были удостоены такой же высочайшей оценки качества в классификации, которая до сих пор остается актуальной.
                                                        </h6>
                                                </div>
                                                <div className='mb-20 after:absolute after:max-w-80 after:h-[1px] after:bg-gray-600 after:-bottom-8 after:w-full relative'>
                                                        <p className='text-mini opacity-50 tracking-widest mb-2 uppercase'>винификация:</p>
                                                        <h6>
                                                                Виноград поступает на винодельню, где после сортировки, ферментации и прессования сок полученный самотеком отделяется от мезги, которая
                                                                также прессуется для получения «вэн де пресс». Вину дают отдохнуть, далее следует яблочно-молочное брожение и асамбляж путем определения
                                                                наилучшей возможной комбинации различных сортов. Выдержка проходит в дубовых бочках на протяжении 18-22 месяцев, 80 % из которых новые,
                                                                с периодическим снятием с осадка. После выдержки в баррелях вино переливают в чаны перед бутылированием.
                                                        </h6>
                                                </div>
                                        </div>
                                </div>
                        </section>
                        <CardCarousel>
                                <Card id={1} />
                                <Card id={1} />
                                <Card id={1} />
                        </CardCarousel>
                        <Special />
                </>
        )
}

export default Product
