import type { Metadata } from 'next'
import { Inter, Alex_Brush } from 'next/font/google'
import '@/css/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
                <html lang='en'>
                        <body className={`antialiased text-xs font-medium ${inter.variable} ${alexBrush.variable} font-serif h-screen`}>
                                <div className='wrapper flex flex-col h-full'>
                                        <Header />
                                        <main className='flex-auto'>{children}</main>
                                        <Footer />
                                </div>
                        </body>
                </html>
        )
}
