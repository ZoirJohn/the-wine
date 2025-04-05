import type { Metadata } from 'next'
import { Inter, Alex_Brush } from 'next/font/google'
import '@/css/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
        title: 'Winemill',
}

const inter = Inter({
        weight: ['400', '500', '600', '700'],
        variable: '--inter',
})
const alexBrush = Alex_Brush({
        weight: ['400'],
        variable: '--alex',
})

export default function RootLayout({
        children,
}: Readonly<{
        children: React.ReactNode
}>) {
        return (
                <html lang='en' >
                        <body className={`antialiased text-xs font-medium ${inter.variable} ${alexBrush.variable} font-serif h-screen`}>
                                <div className='wrapper flex flex-col h-full'>
                                        <Header />
                                        <main className='flex-auto'>
                                                {children}
                                                <section>
                                                        <div className='_container pt-12 pb-31 grid grid-cols-2 max-md:grid-cols-1 max-md:justif gap-y-12'>
                                                                <p className='basis-[486px] grow-1 pr-27 max-md:px-15 max-xs:p-0 leading-[25px]'>
                                                                        Благодаря рекомендациям наших опытных кавистов, вы сможете не только приобрести ту самую бутылку вина, но и узнать много нового
                                                                        о сочетаниях, подборе гастрономической пары, необходимости декантации, хранении и сервировке.
                                                                </p>
                                                                <p className='basis-[521px] grow-1 pr-20 max-md:px-15 max-xs:p-0 leading-[25px]'>
                                                                        Мы с удовольствием поделимся с Вами самыми главными винными секретами, а также поможем подобрать идеальные букет и вкус,
                                                                        соответствующие поводу, вашим предпочтениям и статусу.
                                                                </p>
                                                                <Link href='/' className='uppercase link justify-self-start max-md:justify-self-center'>
                                                                        УЗНАТЬ БОЛЬШЕ
                                                                </Link>
                                                        </div>
                                                </section>
                                                <section>
                                                        <div className='_container flex relative min-h-[285px] justify-center'>
                                                                <form className='min-h-[285px] basis-[500px] bg-black relative pt-8 pl-11 pr-16 max-xs:px-8 max-xs:p-0 rightTriangle after:border-r-[133px] flex flex-col items-start max-xs:justify-center gap-y-6 opacity-100'>
                                                                        <p className='uppercase font-bold tracking-[3px] text-center'>ПОДПИСАТЬСЯ НА EMAIL РАССЫЛКУ</p>
                                                                        <label className='flex flex-col gap-y-4 w-full'>
                                                                                <span className='text-mini opacity-50'>EMAIL</span>
                                                                                <input type='text' name='' id='' className='bg-white py-[10px]' />
                                                                        </label>
                                                                        <button className='uppercase bg-[#9D0000] py-[10px] px-[50px]'>ОТПРАВИТЬ</button>
                                                                </form>
                                                                <div className='grow-1 bg-[url(/shop.png)] bg-no-repeat bg-[-2rem] flex justify-center max-md:hidden'></div>
                                                        </div>
                                                </section>
                                        </main>
                                        <Footer />
                                </div>
                        </body>
                </html>
        )
}
